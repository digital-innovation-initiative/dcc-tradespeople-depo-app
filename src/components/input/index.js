import React from 'react';
import styled from 'styled-components';
import FormControl from 'react-bootstrap/FormControl';
import { InputGroup } from 'react-bootstrap';
import { ReactComponent as EyeIcon } from './eye.svg';

const StyledInputGroup = styled(InputGroup)`
  border: 1px solid #dfdfdf;
  border-radius: 4px;
`;

const StyledFormCtrl = styled(FormControl)`
&&& {
  padding: 20px 15px;
  box-shadow: none;
  font-size: 16px;
  border: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.37);
    letter-spacing: normal;
  }
  ${props => props.type === 'password'
    ? 'letter-spacing: 6px'
    : ''}
}
`;

const StyledInput = ({ className, ...props}) => (
  <StyledInputGroup className={className}>
    <StyledFormCtrl {...props} />
  </StyledInputGroup>
)

const IconContainer = styled(InputGroup.Text)`
  background-color: #fff;
  &&& {
    border: none;
    border-radius: 0 3px 3px 0;
  }
`;


export const PasswordInput = (props) => {
  return (
    <StyledInputGroup>
      <StyledFormCtrl type='password' {...props} placeholder='Password' />
      <InputGroup.Append>
      <IconContainer>
        <EyeIcon />
      </IconContainer>
      </InputGroup.Append>
  </StyledInputGroup>
  )
};

export default StyledInput;
