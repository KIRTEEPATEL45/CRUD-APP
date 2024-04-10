import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import List from './List';
import Create from './Create';
import Edite from './Edite';
import Table from './Table';
function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Table/>} />
    <Route path='/Create' element={<Create />} />
    <Route path='/Edite/:id' element={<Edite />} />
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
