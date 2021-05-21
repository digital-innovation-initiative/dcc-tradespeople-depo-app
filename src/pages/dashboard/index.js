import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import StatusBadge from '../../components/status-badge';
import Button from '../../components/button';

const H3 = styled.h3`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin: 0;
  padding: .375rem 0;
`;

const P = styled.p`
  font-weight: 400;
  color: #212121;
  font-family: 'Open Sans';
  text-align: left;
  padding-right: 35px;
`;

const StyledRow = styled(Row)`
  border-bottom: 1px solid #E5E5E5;
  flex-direction: column;
  align-items: flex-start;
`;

const HeaderRow = styled(Row)`
  margin: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const JobStatus = ({ priority }) => {
  switch (priority) {
    case 'urgent':
      return (
        <StatusBadge variant='warning'>
          Urgent
        </StatusBadge>
      );
    case 'emergency':
      return (
        <StatusBadge variant='danger'>
          Emergency
        </StatusBadge>
      );
    case 'routine': //routine
      default: 
        return (
          <StatusBadge>
            Routine
          </StatusBadge>
        );
  }
}

const ListItem = ({ title, jobId, priority }) => {
  return (
    <StyledRow xs={12} md={9}>
      <HeaderRow>
        <H3>{title}</H3>
        <Button variant='link'>View</Button>
      </HeaderRow>
      <div className='d-flex my-1 justify-content-center'>
        <JobStatus priority={priority} />
      </div>
      <P>
        Pipe under the kitchen sink has burst with water
        flooding the interior of the property.
      </P>
    </StyledRow>
  );
}

const Dashboard = () => {
  return (
    <Container>
      <ListItem title={'Burst Kitchen Pipe'} priority='emergency'/>
      <ListItem title={'Sink tap not running'}  priority='urgent' />
      <ListItem title={'Install sink fixtures'}/>
    </Container> 
  )
}

export default Dashboard;
