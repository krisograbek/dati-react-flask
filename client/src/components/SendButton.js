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

const SendButton = ({ handleSendMessage, isDisabled, children }) => (
  <StyledSendButton onClick={handleSendMessage} disabled={isDisabled}>
    {children}
  </StyledSendButton>
)

export default SendButton;
