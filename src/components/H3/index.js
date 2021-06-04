import styled from 'styled-components';

export default styled.h3`
  font-weight: 400;
  font-size: 16px;
  ${
    props => props.alt
      ? `
        color: #929292;
        font-family: 'Roboto';
      `
      : `
        color: #212121;
        font-family: 'Open Sans';
      `
  }
  ${
    props => props.black ? `
      color: #212121;
    `
    : ''
  }
  margin: 0;
  padding: .375rem 0;
  text-align: left;
`;