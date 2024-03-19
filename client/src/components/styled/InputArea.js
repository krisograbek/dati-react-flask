// src/components/styled/InputArea.js
import styled from 'styled-components';

const InputArea = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #dee2e6;
  border-radius: 20px;
  outline: none;
  width: calc(100% - 80px); // Considering padding and button width

  @media (max-width: 768px) {
    width: calc(100% - 60px); // Smaller button on mobile
  }
`;

export default InputArea;
