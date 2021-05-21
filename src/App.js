import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import StatusBadge from './components/status-badge';
import { Container } from 'react-bootstrap';
import SignInPage from './pages/sign-in';

function App() {
  return (
    <div className="App">
      <Container>
        <SignInPage />
        <StatusBadge variant="primary">Routine</StatusBadge>
        <StatusBadge variant="danger">Danger</StatusBadge>
        <StatusBadge variant="warning">Urgent</StatusBadge>
      </Container>
    </div>
  );
}

export default App;
