import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Norris from './pages/Norris';
import NasaData from './pages/NasaData';

export default function App() {
  return(
    <>
      <h1>Fetching External APIs</h1>
      <Routes>
        <Route path="/chuck" element={<Norris />} />
        <Route path="/nasa" element={<NasaData />} />
      </Routes>
    </>
  )
}
