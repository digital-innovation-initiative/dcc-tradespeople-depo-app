import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SignInPage from './pages/sign-in';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Container>
        <SignInPage />
        <Dashboard />
      
      </Container>
    </div>
  );
}

export default App;
