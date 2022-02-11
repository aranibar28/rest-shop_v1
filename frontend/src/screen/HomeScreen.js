import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Product, Loader, Message } from "../components";
import { listProducts } from "../actions/productActions";

export function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>Últimos Productos</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
