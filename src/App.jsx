import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroBanner } from './insfrastructure/components/Hero/HeroBanner';
import { Home } from './insfrastructure/components/Pages/Home';
import { Services } from './insfrastructure/components/Pages/Services';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Services />} />
        <Route path="/services/" element={<Services />} />
        <Route path="*" element={<div>Ruta no encontrada</div>} /> 
      </Routes>
    </Router>
  );
};

export default App;
