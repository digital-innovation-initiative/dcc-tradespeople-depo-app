import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const CSS = css`
  color: #059DF2;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #059DF2;
  }
`;

export const LinkA = styled(Link)`
  ${CSS}
`;

export default styled.a`
  ${CSS}
`;