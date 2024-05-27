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

  const addProduct = async (e) => {
    if (e) {
      e.preventDefault();
    }
  
    try {
      const response = await axios.post(
        "http://localhost:3306/api/addProduct",
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
    } catch (error) {
      // Handle error
      console.error("Error:", error.message);
    }
  };
  

  return (
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
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleDescription}
          required
        />
      </div>
      <div>
        <label>Size:</label>
        <input
          type="text"
          name="size"
          value={size}
          onChange={handleSize}
          required
        />
      </div>
      <div>
        <label>Material:</label>
        <input
          type="text"
          name="material"
          value={material}
          onChange={handleMaterial}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={handlePrice}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={imageLink}
          onChange={handleImageLink}
          required
        />
      </div>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
