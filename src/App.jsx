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
      <div className='font-montserrat'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App
