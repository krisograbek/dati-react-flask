import { useEffect } from 'react';
import axios from 'axios';

export function useAudioTranscriber(recordingBlob, sendMessage, isTranscriptionReady, setIsTranscriptionReady) {
  useEffect(() => {
    if (recordingBlob && isTranscriptionReady) {
      const formData = new FormData();
      formData.append("audio", recordingBlob, "recording.webm");

      axios.post('http://localhost:5000/api/transcribe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        const transcript = response.data.text;
        sendMessage(transcript);
        setIsTranscriptionReady(false); // Reset the flag after transcription
      }).catch(error => {
        console.error('Error sending audio to the server:', error);
      });
    }
  }, [recordingBlob, sendMessage, isTranscriptionReady, setIsTranscriptionReady]);
}

