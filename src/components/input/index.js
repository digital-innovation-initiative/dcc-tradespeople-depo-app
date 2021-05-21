import React, { useState } from 'react';
import styled from 'styled-components';
import FormControl from 'react-bootstrap/FormControl';
import { InputGroup } from 'react-bootstrap';
import { ReactComponent as EyeIcon } from './eye-show.svg';
import { ReactComponent as EyeHideIcon } from './eye-hide.svg';
import { ReactComponent as GreenCheckIcon } from './green-tick-circle.svg';

const StyledInputGroup = styled(InputGroup)`
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  margin: 10px 0px;
`;

const StyledFormCtrl = styled(FormControl)`
&&& {
  padding: 20px 15px;
  box-shadow: none;
  font-size: 16px;
  border: none;
  height: 56px;
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
  cursor: pointer;
  &&& {
    border: none;
    border-radius: 0 3px 3px 0;
  }
`;


export const PasswordInput = (props) => {
  const [ showPwd, setShowPwd ] = useState(false);
  return (
    <StyledInputGroup>
      <StyledFormCtrl
        type={showPwd ? 'text' : 'password'} {...props}
        placeholder='Password' />
      <InputGroup.Append>
      <IconContainer onClick={() => setShowPwd(!showPwd)}>
        {showPwd ? <EyeHideIcon /> : <EyeIcon />}
      </IconContainer>
      </InputGroup.Append>
  </StyledInputGroup>
  )
};

export const InputWithValidity = ({ valid, ...props }) => {
  return (
    <StyledInputGroup>
      <StyledFormCtrl {...props} />
      {
        valid
          ? <InputGroup.Append>
              <IconContainer>
                <GreenCheckIcon />
              </IconContainer>
            </InputGroup.Append> 
          : null}
  </StyledInputGroup>
  )
}

export default StyledInput;
