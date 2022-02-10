import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Logo } from "../utils";
export function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <Logo />
            ShoppingDev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart">
                <i className="fas fa-shopping-cart" /> Carrito
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login">
                <i className="fas fa-user" /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
