import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import ChatContainer from './components/styled/ChatContainer';
import MessageList from './components/styled/MessageList';
import MessageItem from './components/styled/MessageItem';
import InputArea from './components/styled/InputArea';
import StatusBar from './components/StatusBar';
import FileUploadButton from './components/FileUploadButton';
import SendButton from './components/SendButton';
import Header from './components/styled/Header';
import Tooltip from './components/Tooltip';

import { useAudioRecorder } from 'react-audio-voice-recorder'

import { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleStop, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import StyledSendButton from './components/styled/StyledSendButton';

const host = "http://localhost:5000/"

function App() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { startRecording, stopRecording, recordingBlob, isRecording } = useAudioRecorder();


  const [synthesizeResponse, setSynthesizeResponse] = useState(false); // User's choice for audio synthesis
  const [lastBlob, setLastBlob] = useState(null);

  // Function to send text to /chat endpoint
  const handleSendMessage = useCallback(async (text, shouldSynthesize) => {
    const userMessage = { role: 'user', content: text };
    // Optimistically update UI with the user's message
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/chat', {
        user_prompt: text,
      });
      const assistantMessage = { "role": "assistant", "content": response.data.response }
      console.log("First response", assistantMessage)

      if (shouldSynthesize) {
        console.log("Am I getting here?")
        // Assuming the backend expects text and returns a URL to the mp3
        const synthesisResponse = await axios.post('http://localhost:5000/synthesize', {
          text: assistantMessage.content,
        });
        const audioUrl = host + synthesisResponse.data.audio_url; // Adjust according to your response structure
        console.log("Receiving audio url", audioUrl)
        assistantMessage.audioUrl = audioUrl; // Add the audioUrl to the assistant message
      }

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      setInputValue('');
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Effect hook to manage sending the recording for transcription and then sending to chat
  useEffect(() => {
    const transcribeAudio = async () => {
      if (recordingBlob && !isLoading) {
        console.log('Processing new blob:', recordingBlob);
        setIsLoading(true);
        const formData = new FormData();
        formData.append("audio", recordingBlob, "recording.webm");

        try {
          const response = await axios.post('http://localhost:5000/api/transcribe', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          const transcript = response.data.text;
          console.log("Transcript:", transcript);
          await handleSendMessage(transcript, synthesizeResponse);
          // await sendMessage(transcript);
        } catch (error) {
          console.error('Error transcribing message:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    transcribeAudio();
  }, [lastBlob, handleSendMessage]);

  // Use effect to handle start and stop of recording
  useEffect(() => {
    if (!isRecording && recordingBlob) {
      setLastBlob(recordingBlob); // Update lastBlob when recording stops
    }
  }, [isRecording, recordingBlob]);


  const handleStopRecording = () => {
    stopRecording();
  };

  const handleFileUpload = async (event) => {
    setUploadingFile(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('csv_file', file);
    try {
      const response = await axios.post('http://localhost:5000/upload-csv', formData);
      if (response.status === 200) {
        setMessages([]); // Clear messages in the front-end state
        setIsFileUploaded(true);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploadingFile(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChatContainer>
        <Header>Query Assistant</Header>
        <MessageList>
          {messages.map((msg, index) => (
            <React.Fragment key={index}>
              <MessageItem isUser={msg.role === 'user'}>
                {msg.content}
              </MessageItem>
              {msg.audioUrl && (
                <audio controls autoPlay>
                  <source src={msg.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </React.Fragment>
          ))}

        </MessageList>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <Tooltip text="Upload your CSV file here to start the chat.">
            <FileUploadButton handleFileUpload={handleFileUpload} uploadingFile={uploadingFile} />
          </Tooltip>

          <InputArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputValue, synthesizeResponse)}
            disabled={!isFileUploaded}
            placeholder={isFileUploaded ? 'Ask me about your data...' : ''}
          />

          <SendButton handleSendMessage={() => handleSendMessage(inputValue, synthesizeResponse)} isDisabled={!isFileUploaded || isLoading} isLoading={isLoading} />
          <StyledSendButton onClick={isRecording ? handleStopRecording : startRecording} disabled={!isFileUploaded || isLoading}>
            <FontAwesomeIcon icon={isRecording ? faCircleStop : faMicrophone} />
          </StyledSendButton>
        </div>
        <StatusBar isFileUploaded={isFileUploaded}>
          {!isFileUploaded && 'Please upload a CSV file to use the chat.'}
        </StatusBar>
        <label>
          <input
            type="checkbox"
            checked={synthesizeResponse}
            onChange={(e) => setSynthesizeResponse(e.target.checked)}
          />
          Synthesize response into audio
        </label>

      </ChatContainer >
    </ThemeProvider>
  );
}

export default App;
