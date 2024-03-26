import axios from 'axios';
import { useState } from 'react';

function useChat(setIsLoading) {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/chat', {
        user_prompt: text,
      });
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const transcribeAndSend = async (recordingBlob) => {
    setIsLoading(true); // Ensure loading is true at the start of the operation

    if (recordingBlob) {
      const formData = new FormData();
      formData.append("audio", recordingBlob, "recording.webm");

      try {
        const response = await axios.post('http://localhost:5000/api/transcribe', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const transcript = response.data.text;
        console.log("Transcript", transcript)
        await sendMessage(transcript); // Wait for sendMessage to complete
      } catch (error) {
        console.error('Error sending audio to the server:', error);
      } finally {
        setIsLoading(false); // Set loading to false once all operations are complete
      }
    } else {
      setIsLoading(false); // Ensure loading is false if there is no recordingBlob
    }
  };

  return { messages, sendMessage, transcribeAndSend };
}

export default useChat;
