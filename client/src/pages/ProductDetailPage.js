import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../api/API.js";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const hostname = API;

  useEffect(() => { 
    const getProduct = () => {
      axios.get(`http://${hostname}:3306/api/products/${id}`).then((response) => {
        setProduct(response.data);
      });
    };

    getProduct();
  }, [id]);

  return (
    <section class="content-section content-section-single">
      <div class="content-container">
      {product ? (
        <div>
          <h1>{product.productName}</h1>
          <img src={product.imageLink} alt={product.name} />
          <p>{product.description}</p>
          <p>Size: {product.size}</p>
          <p>Material: {product.material}</p>
          <p>{product.price} Zenny</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </section>
  );
};

export default ProductDetail;
