// src/components/FileUploadButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledFileUploadButton = styled.label`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  color: #004085;

  input[type='file'] {
    display: none;
  }
`;

const FileUploadButton = ({ handleFileUpload, uploadingFile }) => (
  <StyledFileUploadButton>
    <FontAwesomeIcon icon={faPaperclip} />
    <input type="file" accept=".csv" onChange={handleFileUpload} disabled={uploadingFile} />
  </StyledFileUploadButton>
);

export default FileUploadButton;
