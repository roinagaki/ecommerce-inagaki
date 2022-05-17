import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


export default function NavBar(){

return(
<Navbar className="navbar" expand="lg">
<Container>
 
  <Navbar.Brand className="brand" href="#home" >ADELFA</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#link">Menú</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Indumentaria</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Amigurumis</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <CartWidget/>
  </Navbar.Collapse>

</Container>
</Navbar>
)
}



