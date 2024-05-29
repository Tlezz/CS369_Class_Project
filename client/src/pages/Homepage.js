import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../static/main.css";
import "../static/normalize.css";


const Homepage = () => {

  // change hostname
  // copy from Public IPv4 address
  const hostname = "34.228.143.240";
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = () => {
      axios.get(`http://${hostname}:3306/api/products/`).then((response) => {
        setProductList(response.data);
      });
    };

    getProductList();
  }, []);

  return (
    <section class="content-section content-section-single">
      <div class="content-container">
        <h2>Products</h2>
        <div
          className="grid grid-3 content-container  text-center"
          style={{ marginTop: "36px" }}
        >
          {productList.map((product) => (
            <div key={product.productID} className="product-item grid-item">
              <Link
                to={`/product/${product.productID}`}
                style={{ textDecoration: "none" }}
              >
                <img src={product.imageLink} alt={product.name} />
                <h2 style={{ marginTop: "36px" }}>{product.productName}</h2>
                <p>{product.price} Zenny</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
