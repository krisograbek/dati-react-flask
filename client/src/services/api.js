import axios from 'axios';

// Dynamic base URL based on environment
const baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "http://localhost:8000";

const api = axios.create({
  baseURL: baseURL,
});

export const sendMessage = async (text) => {
  return await api.post('/chat', { user_prompt: text });
};

export const synthesizeMessage = async (text) => {
  return await api.post('/synthesize', { text });
};

export const transcribeAudio = async (formData) => {
  return await api.post('/api/transcribe', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const uploadFile = async (formData) => {
  return await api.post('/upload-csv', formData);
};
