// src/components/styled/StatusBar.js
import styled from 'styled-components';

const StatusBar = styled.div`
  background-color: #e9ecef;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  display: ${({ isFileUploaded }) => (isFileUploaded ? 'none' : 'block')};
`;
export default StatusBar;
