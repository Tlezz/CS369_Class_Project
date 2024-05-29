import React, { useEffect, useState } from "react";
import axios from "axios";

const AddProduct = () => {
  // ID is Primary
  const [productName, setProductName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");

  // change hostname
  // copy from Public IPv4 address
  const hostname = "54.164.117.73";

  const handleProductName = (event) => {
    setProductName(event.target.value);
  };

  const handleImageLink = (event) => {
    setImageLink(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleMaterial = (event) => {
    setMaterial(event.target.value);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const addProduct = async (e) => {
    if (e) {
      e.preventDefault();
    }
  
    try {
      const response = await axios.post(
        `http://${hostname}:3306/api/addProduct`,
        {
          sending: {
            productName,
            imageLink,
            price,
            description,
            size,
            material,
          },
        }
      );
  
      // Handle successful
      console.log("Success: Product added");
      handleRefresh();
    } catch (error) {
      // Handle error
      console.error("Error:", error.message);
    }
  };
  

  return (
    <section class="content-section content-section-single">
      <div class="content-container">
      <h2>Add New Product</h2>
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productName}
            onChange={handleProductName}
            required
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <label>Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={handleDescription}
            required
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <label>Size:</label>
          <input
            type="text"
            name="size"
            value={size}
            onChange={handleSize}
            required
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <label>Material:</label>
          <input
            type="text"
            name="material"
            value={material}
            onChange={handleMaterial}
            required
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handlePrice}
            required
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={imageLink}
            onChange={handleImageLink}
            required
          />
        </div>
        <button style={{ marginTop: '24px' }} className="button button-green" onClick={addProduct}>Add Product</button>
      </div>
    </div>
    </section>
  );
};

export default AddProduct;
