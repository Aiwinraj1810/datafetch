
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import AddRecord from './pages/AddRecord.js';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/' element={<Home />}
        />
        <Route
          path='/addRecord' element={<AddRecord />}
        />
      </Routes>
    </div>
  );
}

export default App;
