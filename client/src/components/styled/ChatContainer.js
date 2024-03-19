// src/components/styled/ChatContainer.js
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 768px;
  margin: auto;
  height: 99vh;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export default ChatContainer;
