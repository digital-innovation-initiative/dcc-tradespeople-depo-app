import styled from 'styled-components';

export default styled.p`
  font-weight: 400;
  color: #212121;
  font-family: 'Open Sans';
  text-align: left;
  ${props => props.noSpacing
    ? `` 
    : `
      padding-right: 30px;
      margin-bottom: 40px;
    `}
  display: block;
  font-size: 16px;
`;
