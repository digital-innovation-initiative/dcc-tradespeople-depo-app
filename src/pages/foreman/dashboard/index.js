import styled from 'styled-components';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import H2 from '../../../components/H2';
import H1 from '../../../components/H1';
import P from '../../../components/P';
import StatusBadge from '../../../components/status-badge';

import { ReactComponent as ExpandIcon } from '../../../icons/expand.svg';
import { ReactComponent as PersonIcon } from '../../../icons/person-plus.svg';

const StyledUL = styled.ul`
border: 0.5px solid #CED4DA;
`;

const StyledLI = styled.li`
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  &:not(:first-child):before {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #CED4DA;
    align-self: flex-start;
    display: inline;
    position: relative;
    bottom: 20px;
  }
`;

const JobItem = ({ priority, title, description }) => {
  return (
    <Row as={StyledLI}>
      <Col md={2}>
        <StatusBadge className='w-100' priority={priority} />
      </Col>
      <Col xs={5} md={7} lg={8}>
        <H2>{title}</H2>
        <P className='m-0'>
          {description}
        </P>
      </Col>
      <Col xs={4} md={3} lg={2}
        className='d-flex justify-content-center align-items-center'>
        <Col className='d-flex justify-content-center'>
          <ExpandIcon />
        </Col>
        <Col className='d-flex'>
          <PersonIcon />
        </Col>
      </Col>
    </Row>
  )
}

const DUMMY_JOB_DATA = [
  {
    title: 'Burst Kitchen Pipe',
    priority: 'emergency',
    description: 'Pipe under the kitchen sink has burst with water flooding the interior.',
  },
  {
    title: 'Front Door Broken from Vandalism',
    description: 'Front door of the property has been damaged from vandalism',
    priority: 'emergency',
  },
  {
    title: 'Sink tap not running',
    description: 'The water has not been running from the kitchen sink tap for most of the morning. ',
    priority: 'urgent',
  },
  {
    title: 'Install sink fixtures',
    description: 'The tenant has had a new sink installed but none of the fixtures.',
    priority: 'urgent',
  },
  {
    title: 'Sink tap not running',
    description: 'Pipe under the kitchen sink has burst with water flooding the interior of the property.',
    priority: 'urgent',
  },
  {
    title: 'Install washing machine',
    description: 'Pipe under the kitchen sink has burst with water flooding the interior of the property.',
    priority: 'routine'
  }
]


const ForemanDashboard = (props) => {
  return (
    <>
      <H1 lg bold className='mb-5 mt-3'>
        Pending Jobs Board
      </H1>
      <Container as={StyledUL}>
        {DUMMY_JOB_DATA.map(j => <JobItem {...j} />)}
      </Container>
    </>
  )
}

export default ForemanDashboard;
