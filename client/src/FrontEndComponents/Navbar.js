import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function NavbarMain() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">AMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              &#127968; Home
            </Nav.Link>
            <Nav.Link as={Link} to="/ComplaintForm" className="text-white">
              &#9998; Complaint Registration
            </Nav.Link>
            <Nav.Link as={Link} to="/MyComplaints" className="text-white">
              &#9888; My Complaints
            </Nav.Link>
            <Nav.Link as={Link} to="/Support" className="text-white">
              &#10067; Help and Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
