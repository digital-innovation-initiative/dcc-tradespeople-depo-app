
import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';

const primaryCSS = css`
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
`;

const linkCSS = css`
  color: #059DF2;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
`;
const StyledButton = styled(Button)`
  &&& {
    ${props => props.variant === 'link' ? linkCSS : primaryCSS}
  }
`;

export default StyledButton;
