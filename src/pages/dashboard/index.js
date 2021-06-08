import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import StatusBadge from '../../components/status-badge';
import Button from '../../components/button';
import separator from '../../components/css/separator';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import P from '../../components/P';
import Toast, { Secondary as ToastBubble } from '../../components/toast';

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


const ListItem = ({ title, jobId, priority }) => {
  return (
    <StyledRow xs={12} md={9}>
      <HeaderRow>
        <H2>{title}</H2>
        <Button variant='link'>View</Button>
      </HeaderRow>
      <div className='d-flex my-1 justify-content-center'>
        <StatusBadge priority={priority} />
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
      <Row className='mb-4'>
        <H3></H3>
      </Row>
      <ListItem title={'Burst Kitchen Pipe'} priority='emergency' />
      <ListItem title={'Sink tap not running'}  priority='urgent' />
      <ListItem title={'Install sink fixtures'} />
      <ToastBubble>
        Your job has now been reported as complete.
      </ToastBubble>
    </Container> 
  )
}

export default Dashboard;
