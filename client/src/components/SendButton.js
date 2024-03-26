import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledSendButton = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  color: #007bff;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
  &:disabled {
    color: #cccccc;
    cursor: default;
  }
`;

const SendButton = ({ handleSendMessage, isDisabled, isLoading }) => (
  <StyledSendButton onClick={handleSendMessage} disabled={isDisabled}>
    {isLoading ? <ClipLoader size={24} /> : <FontAwesomeIcon icon={faPaperPlane} />}
  </StyledSendButton>
)

export default SendButton;
