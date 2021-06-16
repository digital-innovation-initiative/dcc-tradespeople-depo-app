import styled from 'styled-components';

export default styled.h1`
font-family: 'Open Sans';
font-weight: ${props => props.bold ? 700 : 600};
font-size: ${props => props.lg ? '40px' : '18px'};
color: #000000;
margin: 0;
padding: .375rem 0;
`;