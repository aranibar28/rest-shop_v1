import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, Button, Card, ListGroup } from "react-bootstrap";
import { Rating } from "../components";
import axios from "axios";

export function ProductScreen() {
  const params = useParams();
  //const product = products.find((p) => p._id === params.id);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    }
    fetchProducts();
  }, []); //eslint-disable-line

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Regresar
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.num_reviews} reseñas`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>Precio: {product.price}</ListGroup.Item>
            <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>S/. {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Estado:</Col>
                  <Col>{product.stock > 0 ? "En stock" : "Agotado"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-success"
                  size="lg"
                  type="button"
                  disabled={product.stock === 0}
                >
                  Agregar Carrito
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
