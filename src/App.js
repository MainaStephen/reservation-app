import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lists from './pages/Home/Lists/Lists';
import Hotel from './pages/Home/Hotel/Hotel';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<Lists/>}/>
        <Route path='/hotel/:id' element={<Hotel/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
