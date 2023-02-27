import './App.css';
import Navigationbar from './Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Convert from './Convert';

function App() {
  return (
    <div className='App'>
    <Navigationbar/>
    <Routes>
       <Route path='/' element={<HomePage/>}/>  
       <Route path='/convert' element={<Convert/>}/>  
    </Routes>
    </div>
  );
}

export default App;
