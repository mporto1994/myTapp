import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import BeerListPaginated from './pages/BeerList/BeerList';
import Register from './pages/Register/Register';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/beers" element={<BeerListPaginated />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
