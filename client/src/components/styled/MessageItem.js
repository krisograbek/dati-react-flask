// src/components/styled/MessageItem.js
import styled, { css } from 'styled-components';

const MessageItem = styled.div`
  margin: 5px 0;
  padding: 10px;
  border-radius: 15px;
  max-width: 80%;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  background-color: ${({ isUser }) => (isUser ? '#d8eefe' : '#f1f1f1')};
  color: ${({ isUser }) => (isUser ? '#004085' : '#495057')};

  ${({ isUser }) =>
    isUser &&
    css`
      border-bottom-right-radius: 2px;
    `}
`;

export default MessageItem;
