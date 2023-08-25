import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  return (
<Navbar expand="lg" style={{ backgroundColor: '#000' }} variant="dark" expanded={expanded}>
      <Container>
      <Navbar.Brand as={Link} to="/">QuoteMuse-API</Navbar.Brand> 
        <Navbar.Toggle onClick={handleNavToggle} aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/getting-started">Getting Started</Nav.Link>           
          <Nav.Link as={Link} to="/endpoints">Endpoints</Nav.Link>           
          <Nav.Link as={Link} to="/authentication">Authentication</Nav.Link>           
          <Nav.Link as={Link} to="/examples">Examples</Nav.Link>           
          <Nav.Link as={Link} to="/support">Support</Nav.Link>      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
