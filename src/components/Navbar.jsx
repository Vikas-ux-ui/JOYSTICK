import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import "../index.css";
import { BsJoystick } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/accountSlice';
import { setLogOutGame } from "../features/gameSlice";
function MyNavbar() {
  const dispatch = useDispatch();
  const logStatus = useSelector((state) => state.accountRed.login);
  const Name = useSelector((state) => state.accountRed.Name);

  const handleLogout = () => {
    dispatch(setLogOutGame());
    dispatch(logout());
  };

  return (
    <Navbar
      expand="lg"
      style={{ height: "100px", backgroundColor: "rgba(4, 30, 55, 1)" }}
    >
      <Container>
        {/* Brand */}
        <NavLink
          to="/"
          end
          className="text-white fw-bold fs-1 text-decoration-none d-flex align-items-center gap-2"
        >
          <BsJoystick /> Joystick
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ms-5 d-flex align-items-center justify-content-between w-100">
            {/* Menu Links */}
            <div className="d-flex gap-4 align-items-center">
              <NavLink
                to="/home"
                end
                className={({ isActive }) =>
                  `fs-4 text-decoration-none ${
                    isActive
                      ? "text-info fw-bold text-decoration-underline"
                      : "text-white fw-semibold"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  `fs-4 text-decoration-none ${
                    isActive
                      ? "text-info fw-bold text-decoration-underline"
                      : "text-white fw-semibold"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/privacy-policy"
                end
                className={({ isActive }) =>
                  `fs-4 text-decoration-none ${
                    isActive
                      ? "text-info fw-bold text-decoration-underline"
                      : "text-white fw-semibold"
                  }`
                }
              >
                Privacy-Policy
              </NavLink>
            </div>

            {/* Auth Buttons */}
            {!logStatus ? (
              <div>
                <Link to="/signup" className="btn btn-info text-white fw-semibold">
                  Create Account
                </Link>
              </div>
            ) : (
              <div className="d-flex gap-3 align-items-center">
                <span className="text-white fw-semibold">hello,{Name}</span>
                <button
                  className="btn btn-outline-light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
