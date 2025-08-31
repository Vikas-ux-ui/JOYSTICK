import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-4 shadow-top">
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="text-center mb-2 mb-md-0">
            <p className="mb-0">&copy; 2025 Valve Corporation. All rights reserved.</p>
          </Col>
          <Col md={8} className="text-center">
            <a href="#" className="text-white mx-2">About Valve</a>
            <a href="#" className="text-white mx-2">Jobs</a>
            <a href="#" className="text-white mx-2">Steamworks</a>
            <a href="#" className="text-white mx-2">Steam Distribution</a>
            <a href="#" className="text-white mx-2">Support</a>
            <a href="#" className="text-white mx-2">Gift Cards</a>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col md={6} className="text-center">
            <a href="#" className="text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-white mx-2">Legal</a>
            <a href="#" className="text-white mx-2">Subscriber Agreement</a>
            <a href="#" className="text-white mx-2">Refunds</a>
            <a href="#" className="text-white mx-2">Cookies</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
