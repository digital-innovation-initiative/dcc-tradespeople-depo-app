import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import { ReactComponent as MenuIcon } from './menu.svg';
import { ReactComponent as AvatarIcon } from './avatar.svg';
import { version } from '../../../package.json';
import separator from '../css/separator';

const MaxWidthContainer = styled(Container)`
  max-width: 100vw;
`;

const MenuContainer = styled(MaxWidthContainer)`
  background-color: #1693C3;
  height: 56px;
  display: flex;
  align-items: center;
  user-select: none;
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

const StyledDrawer = styled(Row)`
  background-color: white;
  margin-top: 55px;
  ${separator}
`;

const MenuRoot = styled(MaxWidthContainer)`
  height: 100vh;
  z-index: 1000;
  padding: 0;
  background-color: red;
  display: none;
`;

const SubText = styled.span`
  color: #8C8C8C;
`;

const MenuDrawer = (props) => {
  return (
    <Portal node={document && document.getElementById('menu-root')}>
      <MenuRoot>
        <StyledDrawer sm={3} className='no-gutters'>
          <AvatarIcon />
          <H1>Ryan Grant</H1>
          <H1>{process.env.REACT_APP_NAME}</H1>
          <SubText>Version {version}</SubText>
        </StyledDrawer>
      </MenuRoot>  
    </Portal>
  )
}

const Menu = ({ pageTitle, showBack }) => {
  return (
      <MenuContainer>
        <MenuDrawer />
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
