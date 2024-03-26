import { useState, useCallback } from 'react';
import axios from 'axios';

export function useMessageHandler(initialMessages = []) {
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (message) => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/chat', {
        user_prompt: message,
      });
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return { messages, sendMessage, isLoading };
}
