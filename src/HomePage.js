import './App.css';
import Navigationbar from './Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextareaAutosize } from '@mui/material';
import { Button } from '@mui/material';
import Heading from './Heading';
import Description from './Description';

function HomePage() {
    return (
      <div className="App">
        <div className='homepage-container'>
          <Heading/>
          <Description/>
        </div>
      </div>
    );
  }
  
  export default HomePage;