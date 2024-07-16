import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import BeerListPaginated from './pages/BeerList/BeerListPaginated';
import UserList from './components/userList';
import './App.css';
import Register from './pages/Register/Register';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/beers" element={<BeerListPaginated />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
