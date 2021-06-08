import styled from 'styled-components';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactComponent as CheckCircleIcon } from '../../icons/check-circle.svg';
import P from '../P';
import A from '../A';

const StyledP = styled(P)`
  color: ${props => props.dark ? '#fff': '#212121'};
  font-family: ${props => props.dark ? 'Roboto': 'Open Sans'};
`;

const ToastContainer = styled.div`
  position: absolute;
  z-index: 1000;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  background-color: #fff;
  width: 100vw;
  left: 0;
  bottom: 0;
  height: 110px;
  display: flex;
  justify-content: center;
`;
export const Primary = ({ children, ...props }) => {
  return (
    <ToastContainer>
      <Row {...props} className='align-content-center align-items-center mx-0 p-3'>
        <Col className='flex-grow-0 flex-basis-auto px-0'>
          <CheckCircleIcon />
        </Col>
        <Col xs={10} md={9}>
          <StyledP className='m-0 pl-1'>
            {children}
          </StyledP>
        </Col>
        <Col xs={12} md={2} className='text-right'>
        <A>CLOSE</A>
        </Col>
      </Row>
    </ToastContainer>
  );
};

export const Secondary = ({ children }) => {
  return (
    <Row>
      <Col xs={10}>
        <StyledP dark>
          {children}
        </StyledP>
      </Col>
      <Col className='flex-grow-0 flex-basis-auto px-0'>
        <CheckCircleIcon />
      </Col>
    </Row>
  )
}

export default Primary;
