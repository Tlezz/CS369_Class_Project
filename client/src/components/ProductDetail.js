import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Size: {product.size}</p>
      <p>Material: {product.material}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
