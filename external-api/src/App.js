import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Norris from './pages/Norris';
import NasaData from './pages/NasaData';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chuck" element={<Norris />} />
      <Route path="/nasa" element={<NasaData />} />
    </Routes>
  )
}

export default App