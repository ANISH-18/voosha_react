import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Nodejs Assignment </Navbar.Brand>

          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
