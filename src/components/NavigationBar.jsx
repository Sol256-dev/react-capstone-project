import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" className="nav-bar" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">KCF Movie Library</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/movies">Movies</Link>
            </Nav.Link>
            <Nav.Link ><Link to="/tvshows">TV Shows</Link></Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item ><Link to="/action">Action</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/comedy">Comedy</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/horror">Horror</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/thriller">Thriller</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                <Link to="/kids">Just for the kids</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
