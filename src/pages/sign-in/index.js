import React, { useState } from 'react';
import DCCLogo from '../../dcc-logo.png';
import { PasswordInput, InputWithValidity } from '../../components/input';
import { LinkButton } from '../../components/button';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import phone from 'phone';
import _ from 'lodash';

const IRELAND_COUNTRY_CODE = 'IE';
const MINIMUM_PASSWORD_CHARS = 5;
const StyledRow = styled(Row)`
  margin-top: 36px;
`;

const SignInPage = ({ loading }) => {
  const [ formData, setFormData ] = useState({
    phone: {
      isValid: false,
      value: '',
    },
    password: {
      isValid: false,
    },
  });

  function checkPhoneValidity (evt) {
    const value = _.get(evt, 'target.value');
    const number = _.head(
      phone(value, IRELAND_COUNTRY_CODE),
    );
    const re = /^[0-9\b]+$/;
    const newData = {
      ...formData.phone,
    }
    if (value === '' || re.test(value)) {
      newData.value = value;
    }
    if (number) {
      newData.isValid = true;
    } else {
      newData.isValid = false;
    }
    setFormData({
      ...formData,
      phone: newData,
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
            onChange={checkPhoneValidity}
            valid={formData.phone.isValid}
            value={formData.phone.value} />
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={11} md={8}>
          <PasswordInput onChange={isValidPassword} />
        </Col>
      </Row>

      <StyledRow className='justify-content-center'>
        <Col xs={7} md={4}>
          <LinkButton disabled={!formData.password.isValid || !formData.phone.isValid}
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
