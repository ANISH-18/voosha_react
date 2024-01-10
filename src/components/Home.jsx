import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Create.css";

function Home() {
  return (
    <div className="container">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Row className="mb-5">
          <Col xs={6} className="text-center">
            <Link to="/signin">
              <Button variant="primary" size="lg" style={{ width: "100%" }}>
                Sign In
              </Button>
            </Link>
          </Col>
          <Col xs={6} className="text-center">
            <Link to="/signup">
              <Button variant="success" size="lg" style={{ width: "130%" }}>
                New User
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
