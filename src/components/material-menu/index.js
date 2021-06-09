import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import useOutsideClick from '@rooks/use-outside-click';

import { ReactComponent as MenuIcon } from './menu.svg';
import { ReactComponent as AvatarIcon } from './avatar.svg';
import { version } from '../../../package.json';
import separator from '../css/separator';
import H4 from '../H4';

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
  &:after {
    content: "";
    display: block;
    margin: 0 -15px;
    ${separator}
  }
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

const MENU_ANIMATIONS = {
  visible: {
    x: 0,
    boxShadow: `0px 16px 24px rgba(0, 0, 0, 0.14),
    0px 6px 30px rgba(0, 0, 0, 0.12),
    0px 8px 10px rgba(0, 0, 0, 0.2)`,
  },
  hidden: {
    x: '-100%',
    boxShadow: 'none',
  }
};

const MenuDrawer = React.forwardRef(({ display, ...props }, ref) => {
  return (
    <Portal node={document && document.getElementById('menu-root')}>
      <MenuRoot className='px-3'
        {...props}
        ref={ref}
        as={motion.div}
        initial={MENU_ANIMATIONS.hidden}
        animate={display ? MENU_ANIMATIONS.visible : MENU_ANIMATIONS.hidden}
        transition={{ duration: 0.35 }}>
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
            <MenuLink to='#'>
              Job Dashboard
            </MenuLink>
          </Col>
        </Row>

      </MenuRoot>  
    </Portal>
  )
});

const Menu = ({ pageTitle }) => {
  const location = useLocation();
  const [isVisible, setVisibility ] = useState(false);
  const parentRef = useRef();

  useOutsideClick(
    parentRef,
    () => {
      if (isVisible) {
        return setVisibility(false);
      }
    },
  );

  return (
      <MenuContainer>
        <MenuDrawer
          ref={parentRef}
          display={isVisible || location.pathname === '/menu'}
          />
        <MenuButton onClick={() => setVisibility(!isVisible)}>
          <Icon />
        </MenuButton>
        <NavHeader>
          {pageTitle}
        </NavHeader>
      </MenuContainer>
  );
};

export default Menu;
