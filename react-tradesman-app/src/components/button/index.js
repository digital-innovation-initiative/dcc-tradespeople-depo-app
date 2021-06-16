
import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const disabledCSS = css`
  opacity: 1;
  background-color: #BBBBBB;
  border-color: #BBBBBB;
`;

export const primaryCSS = css`
  color: #fff !important;
  background-color: #00AFF2;
  border-color: #00AFF2;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  height: 48px;
  width: 100%;
  font-weight: 600;
  &:disabled {
    ${disabledCSS}
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

const ButtonA = styled(StyledButton)`
  display: block;
  border-radius: 4px;
  &:hover {
    text-decoration: none;
  }
  justify-content: center;
  align-items: center;
  display: flex;
  ${props => props.disabled
    ? `
      &&& {
        ${disabledCSS}
      }
      pointer-events: none;
    cursor: default;
    text-decoration: none;`
    : ''
  }
`;

export const LinkButton = (props) => (
  <ButtonA {...props} as={Link} />
);

export default StyledButton;
