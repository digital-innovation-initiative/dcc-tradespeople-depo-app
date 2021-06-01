import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import StatusBadge from '../../components/status-badge';
import Button from '../../components/button';
import separator from '../../components/css/separator';

const H2 = styled.h2`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin: 0;
  padding: .375rem 0;
`;

const H3 = styled.h3`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  color: #212121;
  margin: 0;
  padding: .375rem 0;
  text-align: left;
`;

const P = styled.p`
  font-weight: 400;
  color: #212121;
  font-family: 'Open Sans';
  text-align: left;
  padding-right: 30px;
  margin-bottom: 40px;
`;

const StyledRow = styled(Row)`
  flex-direction: column;
  align-items: flex-start;
  ${separator}
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
        <H2>{title}</H2>
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
      <Row className='mb-3'>
        <H3>My Jobs</H3>
      </Row>
      <ListItem title={'Burst Kitchen Pipe'} priority='emergency' />
      <ListItem title={'Sink tap not running'}  priority='urgent' />
      <ListItem title={'Install sink fixtures'} />
    </Container> 
  )
}

export default Dashboard;
