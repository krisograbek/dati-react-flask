import React, { useCallback, useState } from 'react';
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
import useChat from './hooks/useChat';

function App() {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { startRecording, stopRecording, recordingBlob, isRecording } = useAudioRecorder();
  const { messages, sendMessage, transcribeAndSend } = useChat(setIsLoading);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue(''); // Clear input field after sending
    }
  };

  // Inside App.js
  React.useEffect(() => {
    const handleTranscription = async () => {
      if (recordingBlob) {
        console.log('Sending audio blob to the server', recordingBlob);
        const formData = new FormData();
        formData.append("audio", recordingBlob, "recording.webm");

        try {
          const response = await axios.post('http://localhost:5000/api/transcribe', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response.data);
          // Once transcription is received, use it to send the message
          sendMessage(response.data.text);
        } catch (error) {
          console.error('Error sending audio to the server:', error);
        }
      }
    };

    handleTranscription();
  }, [recordingBlob, sendMessage]);

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
        // setMessages([]); // Clear messages in the front-end state
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
            <MessageItem key={index} isUser={msg.role === 'user'}>
              {msg.content}
            </MessageItem>
          ))}
        </MessageList>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <Tooltip text="Upload your CSV file here to start the chat.">
            <FileUploadButton handleFileUpload={handleFileUpload} uploadingFile={uploadingFile} />
          </Tooltip>

          <InputArea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={!isFileUploaded}
            placeholder={isFileUploaded ? 'Ask me about your data...' : ''}
          />

          <SendButton handleSendMessage={handleSendMessage} isDisabled={!isFileUploaded || isLoading} isLoading={isLoading} />
          <StyledSendButton onClick={isRecording ? handleStopRecording : startRecording} disabled={!isFileUploaded || isLoading}>
            <FontAwesomeIcon icon={isRecording ? faCircleStop : faMicrophone} />
          </StyledSendButton>
        </div>
        <StatusBar isFileUploaded={isFileUploaded}>
          {!isFileUploaded && 'Please upload a CSV file to use the chat.'}
        </StatusBar>
      </ChatContainer >
    </ThemeProvider>
  );
}

export default App;
