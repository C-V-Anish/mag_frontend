import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './Heading';
import Description from './Description';

function HomePage() {
    return (
      <div className="App">
        <div className='bg1'></div>
        <div className='homepage-container'>
          <Heading/>
          <Description/>
        </div>
      </div>
    );
  }
  
  export default HomePage;