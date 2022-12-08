import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { Link } from "react-router-dom";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout(); //logout function is called from the store to use it
  };
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          style={{ backgroundColor: "#e27d60", border: "3px solid black" }}
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Link to="/">
            <Navbar.Brand  style={{ color: "#9FE2BF" }}>
              house help
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ backgroundColor: "#9FE2BF", border: "3px solid black" }}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{
                backgroundColor: "#e27d60",
                border: "3px solid black ",
              }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{ color: "#9FE2BF" }}
                >
                  House Help
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {isLoggedIn && (
                    <Nav.Link
                      style={{
                        color: "#9FE2BF",
                        fontWeight: "701",
                      }}
                      href="/profile"
                    >
                      Profile
                    </Nav.Link>
                  )}
                  {isLoggedIn && (
                    <NavDropdown
                      title="Hire service"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      style={{
                        color: "#9FE2BF",
                        fontWeight: "701",
                      }}
                    >
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/hireservices"
                      >
                        Post a service request
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/lookforservices"
                      >
                        Look for Services
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                  {isLoggedIn && (
                    <NavDropdown
                      title="Apply for service"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      style={{
                        color: "#9FE2BF",
                        fontWeight: "701",
                      }}
                    >
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/fillservices"
                      >
                        Fill Service detail
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/applyservices"
                      >
                        Apply for service
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                  {isLoggedIn && (
                    <NavDropdown
                      title="Requests"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      style={{
                        color: "#9FE2BF",
                        fontWeight: "701",
                      }}
                    >
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/requests?type=hire"
                      >
                        Hire Requests
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/requests?type=service"
                      >
                        Service Requests
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                  {isLoggedIn && (
                    <NavDropdown
                      title="My DashBoard"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      style={{
                        color: "#9FE2BF",
                        fontWeight: "701",
                      }}
                    >
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/STAP?type=hire"
                      >
                        My Service
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/STAP?type=service"
                      >
                        My works
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                  {isLoggedIn && (
                    <NavDropdown
                      title="Settings"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      style={{
                        color: "#9FE2BF",
                        fontWeight: "701",
                      }}
                    >
                      <NavDropdown.Item
                        style={{
                          color: "#e27d60",
                          fontWeight: "701",
                          backgroundColor: "#9FE2BF",
                        }}
                        href="/password"
                      >
                        ChangePassword
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                  {isLoggedIn && (
                    <Nav.Link
                      style={{
                        color: "#9FE2BF",
                        fontWeight: "701",
                      }}
                      onClick={logoutHandler}
                    >
                      Logout
                    </Nav.Link>
                  )}
                  {!isLoggedIn && (
                    <Nav.Link
                      style={{
                        color: "#9FE2BF",
                        fontWeight: "701",
                      }}
                      href="/auth"
                    >
                      Login
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MainNavigation;
