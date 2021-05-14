import DCCLogo from './dcc-logo.png';
import './App.css';
import StyledFormCtrl, { PasswordInput } from './components/input';
import Button from './components/button';

import 'bootstrap/dist/css/bootstrap.min.css';
import StatusBadge from './components/status-badge';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <form>
          <Row>
            <Col className='justify-content-md-center'>
            <img src={DCCLogo} alt="logo" />
            </Col>
          </Row>
          
          <Row className='justify-content-md-center'>
            <Col md={6}>
              <StyledFormCtrl placeholder='DCC Mobile Number' />
            </Col>
          </Row>

          <Row className='justify-content-md-center'>
            <Col md={6}>
              <PasswordInput />
            </Col>
          </Row>

          <Row className='justify-content-md-center'>
            <Col md={6}>
              <Button>Sign in</Button>
            </Col>
          </Row>
        </form>

        <StatusBadge variant="primary">Routine</StatusBadge>
        <StatusBadge variant="danger">Danger</StatusBadge>
        <StatusBadge variant="warning">Urgent</StatusBadge>
      </Container>
    </div>
  );
}

export default App;
