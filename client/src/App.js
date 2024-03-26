// src/App.js
import React, { useState, useEffect } from 'react';
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


import { ThemeProvider } from 'styled-components';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return; // Prevent sending empty messages
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/chat', {
        user_prompt: inputValue
      });
      setMessages(response.data.messages);
      console.log(messages)
      setInputValue('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
    setIsLoading(false);
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-messages');
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
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
        </div>
        <StatusBar isFileUploaded={isFileUploaded}>
          {!isFileUploaded && 'Please upload a CSV file to use the chat.'}
        </StatusBar>
      </ChatContainer >
    </ThemeProvider>
  );
}

export default App;