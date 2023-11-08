import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';
import Home from './pages/Home';
import Norris from './pages/Norris';
import NasaData from './pages/NasaData';

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chuck" element={<Norris />} />
      <Route path="/nasa" element={<NasaData />} />
    </Routes>
  )
}
