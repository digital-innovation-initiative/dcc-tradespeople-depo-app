import styled from 'styled-components';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import { ReactComponent as CheckCircleIcon } from '../../icons/check-circle.svg';
import P from '../P';
import A from '../A';

const StyledP = styled(P)`
&&& {
  color: ${props => props.dark ? '#fff': '#212121'};
  font-family: ${props => props.dark ? 'Roboto': 'Open Sans'};
}
`;

const ToastContainer = styled.div`
  position: absolute;
  z-index: 1000;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  background-color: #fff;
  left: 0;
  bottom: 0;
  height: 110px;
  display: flex;
  justify-content: center;
`;

const CheckCircle = () => {
  return (
    <Col className='flex-grow-0 flex-basis-auto px-0'>
      <CheckCircleIcon />
    </Col>
  );
}

const ToastRow = ({ className, ...props }) => (
  <Row
    {...props}
    className={classNames('align-content-center align-items-center mx-0 p-3', className)}
    />
);

export const Primary = ({ children, ...props }) => {
  return (
    <ToastContainer {...props}>
      <ToastRow >
        <CheckCircle />
        <Col xs={10} md={9}>
          <StyledP className='m-0 pl-1'>
            {children}
          </StyledP>
        </Col>
        <Col xs={12} md={2} className='text-right'>
          <A>CLOSE</A>
        </Col>
      </ToastRow>
    </ToastContainer>
  );
};


const ToastContainerDark = styled(ToastContainer)`
  &&& {
    background-color: transparent;
    filter: none;
  }
`;

const ToastRowDark = styled(ToastRow)`
  &&& {
    background-color: #060606;
    border-radius: 5px;
  }
`;

export const Secondary = ({ children }) => {
  return (
    <ToastContainerDark className='m-3'>
      <ToastRowDark>
      <Col xs={10}>
        <StyledP dark className='mb-0'>
          {children}
        </StyledP>
      </Col>
      <CheckCircle />
    </ToastRowDark>
    </ToastContainerDark>
  )
}

export default Primary;
