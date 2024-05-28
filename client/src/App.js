import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetailPage";
import Login from "./pages/LoginPage";
import AddProduct from "./pages/AddProductPage";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import '../src/static/main.css';
import '../src/static/normalize.css';
import homepageIcon from '../src/static/mhlogo.png';

const App = () => {
  const [showNickname, setShowNickname] = useState("");

  useEffect(() => {
    const showName = () => {
      setShowNickname(localStorage.getItem("yourName"));
    };

    showName();
  }, [localStorage.getItem("yourName")]);

  return (
    <Router>  
      <header className="site-header">  
        <Link className="site-header-item" to="/">
        <img src={homepageIcon} alt="Homepage" className="homepage-icon"  style={{ width: '48px', height: '34px' }}/>
          Homepage</Link> 
        {showNickname && (
          <Link className="site-header-item" to="/add-product">Add New Product</Link>
        )}
        <Link className="site-header-item" to="/login">
          {showNickname ? showNickname : "Sign In"}
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
