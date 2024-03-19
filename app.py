from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot_pipeline import ChatbotPipeline
import os
from dotenv import load_dotenv
from werkzeug.utils import secure_filename

load_dotenv()

app = Flask(__name__)
CORS(app)

openai_api_key = os.getenv("OPENAI_API_KEY")
pipeline = None  # Global variable to hold the pipeline instance
messages = []  # In-memory storage for messages


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
    user_prompt = data["user_prompt"]

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


@app.route("/get-messages", methods=["GET"])
def get_messages():
    try:
        return jsonify({"messages": messages}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
