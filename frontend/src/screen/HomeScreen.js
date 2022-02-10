import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "../components";
import axios from "axios";

export function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
      
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h3>Últimos Productos</h3>
      <Row>
        {products.map((product, index) => (
          <Col sm={12} md={6} lg={4} xl={3} key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
