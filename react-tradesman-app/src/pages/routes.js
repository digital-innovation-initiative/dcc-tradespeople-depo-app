import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './dashboard';
import SignInPage from './sign-in';
import JobDetail from './job-detail';
import JobHistory from './job-history';
import { Container } from 'react-bootstrap';

import { Secondary as ToastSecondary } from '../components/toast';
import SignInLoading from './sign-in/loading';
import ForemanDashboard from './foreman/dashboard';
import ConfirmModal from './job-detail/confirm-modal';


const Routes = ({ header }) => {
  return (
    <Router>
      {header}
      <Switch>
        <Container className='pb-3'>
          <Route exact path='/' component={SignInPage} />
          <Route path='/loading'>
            <SignInLoading percentage={80} />
          </Route>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/detail' component={JobDetail} />
          <Route path='/history' component={JobHistory} />

          {/* component pages below */}
          <Route path='/menu' /> {/* menu displays on this page from logic within menu component */}

          <Route path='/toast'>
            <ToastSecondary>
              Your job has now been reported as complete.
            </ToastSecondary>
          </Route>

          <Route path='/modal'>
            <Container>
              <ConfirmModal />
            </Container>  
          </Route>

          <Route path='/foreman/dashboard'>
            <ForemanDashboard />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default Routes;
