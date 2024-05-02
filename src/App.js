
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Component/User';
import Home from './Component/Home';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import User from './Component/User';
import  Auth from './Component/Auth';
import Ecommerce from './Component/Admin';

function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/ad' element={<Ecommerce/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App
