import React, { useState } from 'react';
import DCCLogo from '../../dcc-logo.png';
import { PasswordInput, InputWithValidity } from '../../components/input';
import { LinkButton } from '../../components/button';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import _ from 'lodash';

const MINIMUM_PASSWORD_CHARS = 5;
const MINIMUM_EMPLOYEE_NO_CHARS = 4;

const StyledRow = styled(Row)`
  margin-top: 36px;
`;

const SignInPage = () => {
  const [ formData, setFormData ] = useState({
    employeeNo: {
      isValid: false,
      value: '',
    },
    password: {
      isValid: false,
    },
  });

  function checkEmpNoValidity (evt) {
    const value = _.get(evt, 'target.value');
    const isValidEmpNo = `${value}`.length >= MINIMUM_EMPLOYEE_NO_CHARS;
    const re = /^[0-9\b]+$/;
    const newData = {
      ...formData.employeeNo,
    }
    if (value === '' || re.test(value)) {
      newData.value = value;
    }
    if (isValidEmpNo) {
      newData.isValid = true;
    } else {
      newData.isValid = false;
    }
    setFormData({
      ...formData,
      employeeNo: newData,
    });
  }

  const isValidPassword = (evt) => setFormData({
    ...formData,
    password: {
      isValid: evt.target.value.length >= MINIMUM_PASSWORD_CHARS,
    }
  });


  return (
    <form>
      <Row>
        <Col className='justify-content-center d-flex'>
          <img src={DCCLogo} alt="logo" />
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={11} md={8}>
          <InputWithValidity
            placeholder='Employee Number'
            onChange={checkEmpNoValidity}
            valid={formData.employeeNo.isValid}
            value={formData.employeeNo.value} />
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={11} md={8}>
          <PasswordInput onChange={isValidPassword} />
        </Col>
      </Row>

      <StyledRow className='justify-content-center'>
        <Col xs={7} md={4}>
          <LinkButton
            disabled={!formData.password.isValid || !formData.employeeNo.isValid}
            to={!window ? '/dashboard' : '/loading/timeout'}>
            <div>
              Sign in
            </div>
          </LinkButton>  
        </Col>
      </StyledRow>
    </form>
  )
};

export default SignInPage;
