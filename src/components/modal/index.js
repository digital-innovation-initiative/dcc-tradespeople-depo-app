import styled from 'styled-components';
import React from 'react';
import { Portal } from 'react-portal';
import { Col, Row } from 'react-bootstrap';
import H1 from '../H1';
import P from '../P';
import A from '../A';

const ModalParent = styled(Row)`
  justify-content: center;
  margin: 0;
`;

const Header = ({ children }) => (
  <Row>
    <Col>
      <H1>{children}</H1>
    </Col>
  </Row>
);

const Body = ({ children }) => (
  <Row>
    <Col>
      <P noSpacing>
        {children}
      </P>
    </Col>
  </Row>
);

const Footer = ({ children }) => (
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
`;

const ContentRoot = styled(Col)`
  background-color: #fff;
  margin-top: 20vh;
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

const Root = ({ children, ...props }) => (
  <Background>
    <ModalParent {...props}>
      <ContentRoot xs={9} md={7} lg={5}>
        {children}
      </ContentRoot>
    </ModalParent>
  </Background>
);

const MinimalModal = (props) => {
  return (
    <Portal node={document && document.getElementById('modal-root')}>
      <Root>
        <Header>
          Confirm Completion
        </Header>
        <Body>
          Once you report a job as finished the job will be closed.
          Please finish any relevant checks before you mark the job as complete.
        </Body>
        <Footer>
          <div className='col-auto'>
            <A>
              Cancel
            </A>
          </div>
          <div className='col-auto'>
            <A>
              Confirm
            </A>
          </div>
        </Footer>
      </Root>
    </Portal>
  );
}

export default MinimalModal;