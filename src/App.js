import logo from './logo.svg';
import './App.css';
import TilesHeader from './containers/TilesHeader';

function App() {
  return (
    <>
      <div className='absolute top-0 left-0 w-[100vw] h-[100vh] -z-10'>
        <TilesHeader/>
      </div>
      <div className='w-[100vw]'>
        <h1 className='text-white w-fit mx-auto h-[10px] my-auto pointer-events-none'>Bav</h1>
      </div>
    </>
  );
}

export default App;
