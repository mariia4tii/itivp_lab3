import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Contact from './pages/contact';
import Menu from './pages/menu';
import SpecialOffers from './pages/special_offers';
import Order from './pages/order';
import Home from './pages/home'; // если у тебя есть главная

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/special_offers" element={<SpecialOffers />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
