
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const StyledButton = styled(Button)`
  &&& {
    color: #fff !important;
    background-color: #00AFF2;
    border-color: #00AFF2;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    height: 48px;
    width: 100%;
    font-weight: 600;
    &:disabled {
      opacity: 1;
      background-color: #BBBBBB;
      border-color: #BBBBBB;
    }
  }
`;

export default StyledButton;
