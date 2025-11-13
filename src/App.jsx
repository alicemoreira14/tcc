import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quemsomos from './components/Quemsomos';
import Produtos from './components/Produtos';
import Referencias from './components/Referencias';
import Jogo from './components/Jogo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quemsomos" element={<Quemsomos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/referencias" element={<Referencias />} />
        <Route path="/jogo" element={<Jogo />} /> 
      </Routes>
    </Router>
  );
};

export default App;