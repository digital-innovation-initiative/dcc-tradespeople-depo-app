import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Menu from './components/material-menu';
import Routes from './pages/routes';

function App() {
  return (
    <div className="App">
      <Menu pageTitle='Dashboard'/>
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
