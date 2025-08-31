import { Container, Row, Col, Button } from "react-bootstrap";
import pic from '../assets/another1.jpg'
import { Link } from "react-router-dom";
export default function About() {
  return (
    <section style={{ backgroundColor: "#0e0e10", color: "#fff", padding: "50px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col md={6} className="text-center">
            <img
              src={pic}
              alt="About Joystick"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>

          {/* Right Side - Text */}
          <Col md={6}>
            <h1 className="mb-4">About Joystick</h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              Welcome to <strong>Joystick</strong> — your one-stop destination for discovering and buying the best games!
              Whether you’re into action, adventure, racing, or strategy, we’ve got something for every gamer.  
              Our mission is to bring you the latest titles, exclusive deals, and a smooth shopping experience.
            </p>
            <p style={{ fontSize: "1rem", opacity: 0.85 }}>
              With powerful search tools, game previews, and an ever-growing library, Joystick is here to make sure
              you never miss out on the fun. Start your gaming journey with us today!
            </p>
            <Button variant="primary" size="lg" >
              <Link to="/home">Browse Games</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
