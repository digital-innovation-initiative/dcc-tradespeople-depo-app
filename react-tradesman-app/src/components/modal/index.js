import styled from 'styled-components';
import React from 'react';
import { Portal } from 'react-portal';
import { Col, Row } from 'react-bootstrap';

import H1 from '../H1';
import P from '../P';
import { hydrate } from 'react-dom';

const ModalParent = styled(Row)`
  justify-content: center;
  margin: 0;
`;

export const Header = ({ children }) => (
  <Row>
    <Col>
      <H1>{children}</H1>
    </Col>
  </Row>
);

export const Body = ({ children }) => (
  <Row>
    <Col>
      <P noSpacing>
        {children}
      </P>
    </Col>
  </Row>
);

export const Footer = ({ children }) => (
  <Row className='justify-content-end'>
    {children}
  </Row>
);

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  min-height: 100vh;
  transition: opacity 300ms ease-in-out;
  opacity: ${props => props.hide ? 0 : 100};
`;

const ContentRoot = styled(Col)`
  background-color: #fff;
  margin-top: 50vh;
  border-radius: 4px;
  max-width: 600px;
  padding: 30px 25px;
  ${P} {
    line-height: 24px;
  }
  ${H1} {
    padding-bottom: 15px;
  }
`;

const Root = ({ children, hide, ...props }) => (
  <Background hide={hide}>
    <ModalParent {...props}>
      <ContentRoot xs={9} md={7} lg={5}>
        {children}
      </ContentRoot>
    </ModalParent>
  </Background>
);

const Dialog = ({ children, ...props }) => {
  const domNode = document && document.getElementById('modal-root');
  const DialogRoot = () => (
    <Portal node={domNode}>
      <Root {...props}>
        {children}
      </Root>
    </Portal>
  );

  if (domNode && domNode.hasChildNodes()) {
    hydrate(<DialogRoot />);
    return <></>
  }

  return (
    <DialogRoot />
  );
}

const MinimalModal = {
  Dialog,
  Header,
  Body,
  Footer,
};

export default MinimalModal;
