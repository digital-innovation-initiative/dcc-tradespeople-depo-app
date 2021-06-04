import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import { ReactComponent as MenuIcon } from './menu.svg';
import { ReactComponent as AvatarIcon } from './avatar.svg';
import { version } from '../../../package.json';
import separator from '../css/separator';
import H4 from '../H4';
import { Link } from 'react-router-dom';

const MaxWidthContainer = styled(Container)`
  max-width: 100vw;
`;

const MenuContainer = styled(MaxWidthContainer)`
  background-color: #1693C3;
  height: 56px;
  display: flex;
  align-items: center;
  user-select: none;
  margin-bottom: 48px;
`;

const Icon = styled(MenuIcon)`
  margin-right: 30px;
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 18px;
  color: #000;
  margin: 0;
  letter-spacing: 0.3px;
`;

const NavHeader = styled(H1)`
  &&& {
    font-weight: 600;
    color: #fff;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
`;

const StyledDrawer = styled.div`
  margin-top: 55px;
  ${separator}
`;

const MenuRoot = styled(MaxWidthContainer)`
  height: 100vh;
  z-index: 1000;
  padding: 0;
  background-color: #fff;
  position: absolute;
  width: 80%;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
    0px 6px 30px rgba(0, 0, 0, 0.12),
    0px 8px 10px rgba(0, 0, 0, 0.2);
  display: ${props => props.display ? 'block' : 'none'};
`;

const VersionText = styled(H4)`
  && {
    text-transform: none;
    font-weight: 400;
  }
`;

const MenuLink = styled(Link)`
  color: #676767;
  font-family: 'Open Sans';
  font-size: 14px;
  &:hover {
    text-decoration: none;
    color: #676767;
  }
`;

const MenuDrawer = ({ display }) => {
  return (
    <Portal node={document && document.getElementById('menu-root')}>
      <MenuRoot className='px-3' display={display}>
        <StyledDrawer sm={3} className='no-gutters'>
          <Row className='align-items-center pb-4'>
            <Col className='flex-grow-0'>
              <AvatarIcon />
            </Col>
            <Col className='pl-0'>
              <H1>Ryan Grant</H1>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <H1>
                {process.env.REACT_APP_TRADESMAN_BUILD_NAME}
              </H1>
            </Col>
            <Col xs={12}>
              <VersionText>
                Version {version}
              </VersionText>
            </Col>
          </Row>
        </StyledDrawer>

        <Row>
            <Col>
              <MenuLink>
                Job Dashboard
              </MenuLink>
            </Col>
          </Row>
      </MenuRoot>  
    </Portal>
  )
}

const Menu = ({ pageTitle, display }) => {
  return (
      <MenuContainer>
        <MenuDrawer display={display} />
        <MenuButton>
          <Icon />
        </MenuButton>
        <NavHeader>
          {pageTitle}
        </NavHeader>
      </MenuContainer>
  );
};

export default Menu;
