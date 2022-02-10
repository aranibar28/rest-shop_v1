import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Rating } from "./Rating";

export function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.num_reviews} reseñas`}
            color={"#f8e825"}
          />
        </Card.Text>
        <Card.Text>S/. {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
