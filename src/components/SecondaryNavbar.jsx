import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { MdOutlineLocationSearching } from "react-icons/md";
import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SecondaryNavbar() {
  const [gameName, setGameName] = useState("");
  const gameData = useSelector((state) => state.gameRed.gameData);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (gameName.trim()) {
      navigate(`/search/${gameName}`);
    }
  };

  return (
    <Navbar
      expand="lg"
      className="mx-auto shadow rounded"
      style={{
        width: "60%",
        backgroundColor: "rgba(33, 93, 150, 1)",
        padding: "10px 20px",
        marginTop: "20px",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="text-white fw-bold fs-4"
          style={{ letterSpacing: "1px" }}
        >
          Joystick
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex align-items-center"
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/home"
              className="text-white fw-semibold me-3"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/your-store"
              className="text-white fw-semibold me-3"
            >
              YourStore
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-categories">
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="px-3 py-2 rounded shadow"
                style={{ width: "300px" }}
              >
                <div className="row">
                  <div className="col-6">
                    <Dropdown.Item as={Link} to="/category/Action">
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/category/Shooter">
                      Shooter
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/category/Indie">
                      Indie
                    </Dropdown.Item>
                  </div>
                  <div className="col-6">
                    <Dropdown.Item as={Link} to="/category/Puzzle">
                      Puzzle
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/category/RPG">
                      RPG
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/category/Adventure">
                      Adventure
                    </Dropdown.Item>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault(); // stop page reload
              handleSearch();
            }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
              style={{ minWidth: "150px" }}
            />
            <Button variant="info" className="text-white" type="submit">
              <MdOutlineLocationSearching />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SecondaryNavbar;
