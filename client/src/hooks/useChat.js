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
    setIsLoading(true);

    if (recordingBlob) {
      const formData = new FormData();
      formData.append("audio", recordingBlob, "recording.webm");

      axios.post('http://localhost:5000/api/transcribe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        const transcript = response.data.text;
        sendMessage(transcript);
      }).catch(error => {
        console.error('Error sending audio to the server:', error);
      });
    }

    setIsLoading(false);
  };

  return { messages, sendMessage, transcribeAndSend };
}

export default useChat;
