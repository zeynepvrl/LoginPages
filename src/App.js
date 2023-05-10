import './App.css';
import {Routes,Route} from 'react-router-dom';
import GeneralForm from './components/GeneralForm';
import Portal from './components/Portal';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<GeneralForm/>} />
      <Route path='/portal' element={<Portal/>} />
     </Routes>
    </div>
  );
}

export default App;
