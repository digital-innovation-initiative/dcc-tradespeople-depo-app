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
        </Container>
      </Switch>
    </Router>
  );
}

export default Routes;
