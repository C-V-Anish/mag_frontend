import './App.css';
import Navigationbar from './Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextareaAutosize } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <div>
      <TextareaAutosize
          rowsMin={10}
          placeholder='Input the Script'
          minRows={20}
          style={{ width: "40%"}}
      />
      </div>
    </div>
  );
}

export default App;
