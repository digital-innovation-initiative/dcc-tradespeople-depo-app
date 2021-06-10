import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { Secondary as ToastMessage } from '../../components/toast';
import StatusBadge from '../../components/status-badge';
import Button from '../../components/button';
import separator from '../../components/css/separator';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import P from '../../components/P';

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



const ListItem = ({ title, jobId, priority, to }) => {
  return (
    <StyledRow xs={12} md={9}>
      <HeaderRow>
        <H2>{title}</H2>
        <Button variant='link' as={Link} to={to}>View</Button>
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

const shouldShowToast = (search) => { //show toast for demo purposes
  const query = new URLSearchParams(search);
  const hasToast = query.get('toast');
  console.log(query, hasToast)
  if (hasToast) {
    return true;
  }
  return false;
}

const Dashboard = () => {
  const { search } = useLocation();
  const showToast = shouldShowToast(search);

  return (
    <>
      <Container>
        <Row className='mb-4'>
          <H3>My Jobs</H3>
        </Row>
        <ListItem title={'Burst Kitchen Pipe'} priority='emergency' to={'/detail'} />
        <ListItem title={'Sink tap not running'}  priority='urgent' />
        <ListItem title={'Install sink fixtures'} />
      </Container>
      {showToast && <ToastMessage>

Your job has now been reported as complete.
</ToastMessage>}
    </>
  )
}

export default Dashboard;
