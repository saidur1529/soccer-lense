import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import {Container} from 'react-bootstrap';
import Header from './Components/Header/Header';
import LeagueLists from './Components/LeagueLists/LeagueLists';

function App() {
  return (
    <div className="col-md-3">
        <LeagueLists />
    </div>

  );
}

export default App;
