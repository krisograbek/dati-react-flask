import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClipLoader } from 'react-spinners';

import StyledSendButton from './styled/StyledSendButton';


const SendButton = ({ handleSendMessage, isDisabled, isLoading }) => (
  <StyledSendButton onClick={handleSendMessage} disabled={isDisabled}>
    {isLoading ? <ClipLoader size={24} /> : <FontAwesomeIcon icon={faPaperPlane} />}
  </StyledSendButton>
)

export default SendButton;
