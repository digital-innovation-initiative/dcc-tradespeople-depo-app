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
import { Primary as Toast, Secondary as ToastSecondary } from '../components/toast';

const Routes = ({ header }) => {
  return (
    <Router>
      {header}
      <Switch>
        <Container>
          <Route exact path='/' component={SignInPage} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/detail' component={JobDetail} />
          <Route path='/history' component={JobHistory} />

          {/* component pages below */}
          <Route path='/menu' />

          <Route path='/toast/primary'>
            <Toast>
              Your job has now been reported as complete.
            </Toast>
          </Route>

          <Route path='/toast/secondary'>
            <ToastSecondary>
            Your job has now been reported as complete.
            </ToastSecondary>
          </Route>

        </Container>
      </Switch>
    </Router>
  );
}

export default Routes;
