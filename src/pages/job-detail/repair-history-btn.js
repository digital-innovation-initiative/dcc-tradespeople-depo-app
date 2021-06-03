import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import P from '../../components/P';
import {
  ReactComponent as ArrowRightIcon
} from '../../icons/arrow-right.svg';

const StyledLink = styled(Link)`
  width: 100%;
  &:hover {
    text-decoration: none;
  }
`;

function RepairHistoryButton ({ to }) {
  return (
    <StyledLink to={to}>
      <Row className='px-0'>
        <Col>
          <P noSpacing>
            Repair History
          </P>
        </Col>
        <Col xs={2} md={1}>
          <ArrowRightIcon />
        </Col>
      </Row>
    </StyledLink>
  );
}

export default RepairHistoryButton;
