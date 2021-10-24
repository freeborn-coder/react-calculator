import './App.css';
import OutputScreen from './components/OutputScreen';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='w-[450px] bg-white rounded-xl h-[650px]'>
        <OutputScreen />
        <ButtonsContainer />
      </div>
    </div>
  );
}

export default App;
