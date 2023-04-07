import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
function NavigationBar() {
  return (
    <Row className='App-header'>
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Tate Still</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://github.com/tatestill">Github</Nav.Link>
            <NavDropdown title="Socials" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://twitter.com/existenceispog">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="https://instagram.com/t8.still?igshid=YmMyMTA2M2Y=">
                Instagram
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://leetcode.com/tatestill/">Leetcode</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/tate-still-0172541b6/">
                LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  );
}

export default NavigationBar;