import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = () => {
      axios.get(`http://localhost:3306/api/products/${id}`).then((response) => {
        setProduct(response.data);
      });
    };

    getProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.productName}</h1>
          <img src={product.imageLink} alt={product.name} />
          <p>{product.description}</p>
          <p>Size: {product.size}</p>
          <p>Material: {product.material}</p>
          <p>${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
