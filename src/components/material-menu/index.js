import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { ReactComponent as MenuIcon } from './menu.svg';

const MenuContainer = styled(Container)`
  background-color: #1693C3;
  height: 56px;
  display: flex;
  align-items: center;
  user-select: none;
  max-width: 100vw;
`;

const Icon = styled(MenuIcon)`
  margin-right: 30px;
`;

const NavHeader = styled.h1`
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  margin: 0;
  letter-spacing: 0.3px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
`;

const MenuDrawer = styled.div`
  width: 100px;
  height: 100vh;
  z-index: 1000;
  background-color: pink;
`;

const Menu = ({ pageTitle }) => {
  return (
      <MenuContainer>
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
