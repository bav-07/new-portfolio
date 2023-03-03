import logo from './logo.svg';
import './App.css';
import TilesHeader from './containers/TilesHeader';

function App() {
  return (
    <>
      <div className='absolute top-0 left-0 w-[100vw] h-[100vh]'>
        <TilesHeader/>
      </div>
      <div className=''>
        <h1></h1>
      </div>
    </>
  );
}

export default App;
