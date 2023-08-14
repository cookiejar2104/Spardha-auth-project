import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Login from './components/Login';
import { Home } from './components/Home';
import Signup from './components/Signup';

function App() {
    return (
      <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>
      
      </BrowserRouter>
    )
}


export default App
