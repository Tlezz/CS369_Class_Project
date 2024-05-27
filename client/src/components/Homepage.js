import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api/api';

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
  