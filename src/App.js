import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/material-menu';
import Routes from './pages/routes';

function App() {
  return (
    <div className="App">
      <Routes header={<Menu pageTitle='Dashboard'/>} />
    </div>
  );
}

export default App;
