import logo from './logo.svg';
import './App.css';
import StyledFormCtrl, { PasswordInput } from './components/input';
import Button from './components/button';

import 'bootstrap/dist/css/bootstrap.min.css';
import StatusBadge from './components/status-badge';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledFormCtrl placeholder='DCC Mobile Number' />
        <PasswordInput />
        <Button>Sign in</Button>
        <StatusBadge variant="primary">Routine</StatusBadge>
        <StatusBadge variant="danger">Danger</StatusBadge>
        <StatusBadge variant="warning">Urgent</StatusBadge>
      </header>
    </div>
  );
}

export default App;
