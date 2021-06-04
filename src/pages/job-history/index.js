import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

import H3 from '../../components/H3';
import H2 from '../../components/H2';
import P from '../../components/P';
import separator from '../../components/css/separator';

const UL = styled.ul``;
const LI = styled.li`
  list-style: none;
  ${separator}
`;

const ListItem = ({ name, jobId, customerName, jobDate, description }) => {
  return (
    <LI className='mt-3'>
      <Row>
        <Col>
          <H2 className='text-left'>
            {name}
          </H2>
        </Col>
        <Col>
          <H3 alt black className='text-right'>
            #{jobId}
          </H3>
        </Col>
      </Row>

      <Row className='mt-1'>
        <Col>
          <H3 alt className='text-left'>
            {customerName}
          </H3>
        </Col>
        <Col>
          <H3 alt className='text-right'>
            {jobDate}
          </H3>
        </Col>
      </Row>

      <Row className='mt-2'>
        <Col>
          <P>
            {description}
          </P>
        </Col>
      </Row>
    </LI>
  );
};

const JOBS = [
  {
    name: 'Replace Cistern',
    jobId: '9597926',
    customerName: 'Darren Fowler',
    jobDate: '06/07/2020',
    description: 'Replaced the cistern and ballcock as the old one was faulty.',
  },
  {
    name: 'Replace Door Handle',
    jobId: '9356245',
    customerName: 'Michael Boyd',
    jobDate: '22/02/2020',
    description: 'Added new PVC door handle as the last one had been damaged by an intruder.',
  },
  {
    name: 'Added Light Fixture',
    jobId: '9356243',
    customerName: 'Anna Lowe',
    jobDate: '27/01/2020',
    description: `Added a new light fitting to the rose in the living room as the old one had become loose.`,
  }
];

const JobHistory = () => {
  return (
    <>
      <H3>Historical Repairs</H3>
      <Container as={UL}>
        {JOBS.map(j => <ListItem {...j} />)}
      </Container>
    </>
  )
};

export default JobHistory;
