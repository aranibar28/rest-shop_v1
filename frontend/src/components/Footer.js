import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright © ShoppingDev 2021</Col>
        </Row>
      </Container>
    </footer>
  );
}
