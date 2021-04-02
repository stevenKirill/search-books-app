import data from './data/books';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './Routes/Routes';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Routes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
