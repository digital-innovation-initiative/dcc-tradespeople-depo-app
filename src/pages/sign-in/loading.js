import classNames from 'classnames';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import LoadingBar from '../../components/loading-bar';
import DCCLogo from '../../dcc-logo.png';

const PageLoadingBar = ({ percentage, className }) => (
  <Row className={classNames('justify-content-center', className)}>
    <Col xs={7} md={6} lg={5} className='justify-content-center'>
      <LoadingBar percentage={percentage} />
    </Col>
  </Row>
);

const SignInLoading = ({ percentage }) => {
  const location = useLocation();
  const history = useHistory();
  if (location && location.pathname.includes('timeout')) { // merely for demo purposes.
    
    setTimeout(
      () => {
        history.push('/dashboard');
      }, 2000);

  }
  return (
    <form>
      <Row>
        <Col className='justify-content-center d-flex'>
          <img src={DCCLogo} alt="logo" />
        </Col>
      </Row>
      <PageLoadingBar percentage={percentage} className='mt-4' />
    </form>
  );
};

export default SignInLoading;
