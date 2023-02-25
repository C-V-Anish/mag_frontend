import './App.css';
import Navigationbar from './Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextareaAutosize } from '@mui/material';
import { Button } from '@mui/material';
import Heading from './Heading';
import Description from './Description';
import { Route,Routes,Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import Convert from './Convert';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigationbar />}>
        <Route index element={<HomePage />}/>
        <Route path='convert' element={<Convert />}/>
      </Route>
  </Routes>
  );
}

export default App;
