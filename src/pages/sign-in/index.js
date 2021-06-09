import React, { useState } from 'react';
import DCCLogo from '../../dcc-logo.png';
import { PasswordInput, InputWithValidity } from '../../components/input';
import Button from '../../components/button';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import phone from 'phone';
import _ from 'lodash';
import LoadingBar from '../../components/loading-bar';
import classNames from 'classnames';


const IRELAND_COUNTRY_CODE = 'IE';
const MINIMUM_PASSWORD_CHARS = 5;
const StyledRow = styled(Row)`
  margin-top: 36px;
`;

const PageLoadingBar = ({ percentage, className }) => (
  <Row className={classNames('justify-content-center', className)}>
    <Col xs={7} md={6} lg={5} className='justify-content-center'>
      <LoadingBar percentage={percentage} />
    </Col>
  </Row>
);

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

  const SignInForm = () => (
    <>
      <Row className='justify-content-center'>
        <Col xs={11} md={8}>
          <InputWithValidity
            placeholder='DCC Mobile Number'
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
        <Col xs={7} md={8}>
          <Button disabled={!formData.password.isValid || !formData.phone.isValid}>
            Sign in
          </Button>  
        </Col>
      </StyledRow>
    </>
  );

  return (
    <form>
      <Row>
        <Col className='justify-content-center'>
          <img src={DCCLogo} alt="logo" />
        </Col>
      </Row>
      {loading ? <PageLoadingBar percentage={80} className='mt-4' /> : <SignInForm />}
    </form>
  )
};

export default SignInPage;
