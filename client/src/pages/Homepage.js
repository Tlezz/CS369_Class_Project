import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Homepage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = () => {
      axios.get("http://localhost:3306/api/products/").then((response) => {
        setProductList(response.data);
      });
    };
    
    getProductList();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {productList.map(product => (
          <div key={product.productID} className="product-item">
            <Link to={`/product/${product.productID}`}>
              <img src={product.imageLink} alt={product.name} />
              <h2>{product.productName}</h2>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
