// StatusBar.js
import styled from 'styled-components';

const StyledStatusBar = styled.div`
  background-color: #e9ecef;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  display: ${(props) => (props.isFileUploaded ? 'none' : 'block')};
`;

const StatusBar = ({ isFileUploaded, children }) => (
  <StyledStatusBar isFileUploaded={isFileUploaded}>
    {children}
  </StyledStatusBar>
)

export default StatusBar;
