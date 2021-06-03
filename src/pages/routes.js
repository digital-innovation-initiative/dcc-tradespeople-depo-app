import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './dashboard';
import SignInPage from './sign-in';
import JobDetail from './job-detail';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignInPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/detail' component={JobDetail} />
      </Switch>
    </Router>
  );
}

export default Routes;
