import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SignInPage from './pages/sign-in';
import Dashboard from './pages/dashboard';
import Menu from './components/material-menu';

function App() {
  return (
    <div className="App">
      <Menu pageTitle='Dashboard'/>
      <Container>
        <SignInPage />
        <Dashboard />
      
      </Container>
    </div>
  );
}

export default App;
