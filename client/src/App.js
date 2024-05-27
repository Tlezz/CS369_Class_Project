import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
