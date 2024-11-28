import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroBanner } from './insfrastructure/components/Hero/HeroBanner';
import { Home } from './insfrastructure/components/Pages/Home';
import { Services } from './insfrastructure/components/Pages/Services';
import "./App.css"
import { NotFound } from './insfrastructure/components/utils/NotFound';
import { CheckOut } from './insfrastructure/components/Pages/CheckOut';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Services />} />
        <Route path="/services/" element={<Services />} />
        <Route path='/checkOut' element={<CheckOut/>}/>
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
