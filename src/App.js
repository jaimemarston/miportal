import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Drivers from './components/Drivers';
import TopBar from './components/TopBar';


// src/App.js
import Header from './components/Header';
import MainContent from './components/MainContent';
import Calendar from './components/Calendar';
import Records from './components/Records';
import './index.css'; // Si tienes estilos específicos de la aplicación, puedes importarlos aquí



function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <TopBar username="NombreUsuario" />
        <div className="flex-grow flex">
          <Navbar />
          <div className="pl-20">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/records" element={<Records />} />
              <Route path="/drivers" element={<Drivers />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
