import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetailPage";
import Login from "./pages/LoginPage";
import AddProduct from "./pages/AddProductPage";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

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
      <Navbar>
        <LinkContainer to="/">
          <Navbar.Brand>Homepage</Navbar.Brand>
        </LinkContainer>

        {localStorage.getItem("yourName") === "" ? (
          <></>
        ) : (
          <LinkContainer to="/add-product">
              <Nav.Link>add new product</Nav.Link>
          </LinkContainer>
        )}

        <LinkContainer to="/login">
          <Nav.Link>
            {localStorage.getItem("yourName") === "" ? (
              <>SignIn</>
            ) : (
              <>{showNickname}</>
            )}
          </Nav.Link>
        </LinkContainer>
      </Navbar>

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
