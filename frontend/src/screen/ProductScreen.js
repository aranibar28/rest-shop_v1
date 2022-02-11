import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, Button, Card, ListGroup } from "react-bootstrap";
import { Rating, Loader, Message } from "../components";
import { listProductDetails } from "../actions/productActions";

export function ProductScreen() {
  const params = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch]); // eslint-disable-line

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Regresar
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
              <ListGroup.Item>
                Descripción: {product.description}
              </ListGroup.Item>
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
      )}
    </div>
  );
}
