import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu.js';
import Home from './pages/Home.js';
import Aboutus from './pages/Aboutus.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Nopage from './pages/Nopage.js';




const App = () => {
  return (
  <BrowserRouter>
    <>
    <header>
     <Menu/>
     </header>
    <Routes>
      <Route index element={<Home/>}></Route>
     <Route path="/home" element={<Home/>}></Route>
     <Route path="/aboutus" element={<Aboutus/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="*" element={<Nopage/>}></Route>
    </Routes>
    </>
  </BrowserRouter>
  );
}

export default App;
