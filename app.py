import os
from flask import Flask, request, jsonify, render_template, send_from_directory, url_for
from flask_cors import CORS
from chatbot_pipeline import ChatbotPipeline
from dotenv import load_dotenv
from werkzeug.utils import secure_filename
from io import BytesIO
from datetime import datetime

from openai import OpenAI


load_dotenv()

app = Flask(
    __name__,
    static_url_path="",
    static_folder="./client/build",
    template_folder="./client/build",
)

CORS(app)

openai_api_key = os.getenv("OPENAI_API_KEY")
pipeline = None  # Global variable to hold the pipeline instance
messages = []  # In-memory storage for messages

# Probably will move to other files
client = OpenAI()


@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")


@app.route("/upload-csv", methods=["POST"])
def upload_csv():
    global pipeline, messages
    if "csv_file" not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files["csv_file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    if file and file.filename.endswith(".csv"):
        messages = []
        filename = secure_filename(file.filename)
        filepath = os.path.join("/tmp", filename)
        file.save(filepath)
        pipeline = ChatbotPipeline(csv_file=filepath, model=3)
        return jsonify({"message": "File uploaded and pipeline initialized"}), 200
    else:
        return jsonify({"error": "Invalid file type"}), 400


@app.route("/chat", methods=["POST"])
def chat():
    global pipeline, messages
    data = request.json
    print(f"data: {data}")
    user_prompt = data["user_prompt"]
    print(f"User prompt: {user_prompt}")

    if pipeline and openai_api_key:
        response = pipeline.run_full_chain(user_prompt)
        # Save user message and response
        messages.append({"role": "user", "content": user_prompt})
        messages.append({"role": "assistant", "content": response})
        return jsonify({"response": response, "messages": messages}), 200
    else:
        return (
            jsonify({"error": "Pipeline not initialized or OpenAI API key missing."}),
            400,
        )


@app.route("/api/transcribe", methods=["POST"])
def transcribe_audio():
    if "audio" in request.files:
        audio_file = request.files["audio"]
        try:
            # Wrap the file content in a BytesIO object
            audio_bytes_io = BytesIO(audio_file.read())

            # Prepare the tuple (filename, file-like object, content_type)
            file_tuple = ("audio.webm", audio_bytes_io, "audio/webm")

            # Pass the tuple to the transcription API
            transcription = client.audio.transcriptions.create(
                model="whisper-1", file=file_tuple
            )

            print(f"Text: {transcription.text}")

            # get_response(transcription.text)

            return jsonify({"text": transcription.text}), 200

        except Exception as e:
            print("An error occurred: ", str(e))
            return jsonify({"error": "An error occurred during transcription"}), 500
    else:
        return jsonify({"error": "No audio file found in request"}), 400


# Assuming you're saving your mp3 files in './dynamic/audio'
DYNAMIC_FOLDER = os.path.join(os.getcwd(), "dynamic", "audio")


@app.route("/dynamic/audio/<filename>")
def dynamic_audio(filename):
    return send_from_directory(DYNAMIC_FOLDER, filename)


@app.route("/synthesize", methods=["POST"])
def synthesize_audio():
    client = OpenAI()
    data = request.json
    text = data["text"]
    print(f"Received text to synthesize: {text}")

    audio = client.audio.speech.create(
        model="tts-1",
        voice="alloy",
        input=text,
    )

    audio_filename = datetime.now().strftime("%Y%m%d_%H%M%S") + ".mp3"

    audio_url = os.path.join("dynamic", "audio", audio_filename)
    full_audio_path = os.path.join(os.getcwd(), audio_url)
    audio.stream_to_file(full_audio_path)

    print(type(audio), audio)
    # Update the response to use the new URL
    dynamic_audio_url = url_for("dynamic_audio", filename=audio_filename)
    return jsonify({"audio_url": dynamic_audio_url}), 200
    # return jsonify({"audio_url": audio_url}), 200


@app.route("/get-messages", methods=["GET"])
def get_messages():
    try:
        return jsonify({"messages": messages}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
