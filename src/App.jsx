import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Grupo from './components/Grupo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grupo" element={<Grupo />} />
      </Routes>
    </Router>
  );
};

export default App;
