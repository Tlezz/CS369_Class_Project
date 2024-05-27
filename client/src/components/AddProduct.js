import React, { useState } from 'react';
import { addProduct } from '../api/api';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    size: '',
    material: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await addProduct(product, `Bearer ${token}`);
      alert('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} />
      </div>
      <div>
        <label>Size:</label>
        <input type="text" name="size" value={product.size} onChange={handleChange} />
      </div>
      <div>
        <label>Material:</label>
        <input type="text" name="material" value={product.material} onChange={handleChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" name="image" value={product.image} onChange={handleChange} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
  