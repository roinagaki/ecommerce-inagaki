import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


export default function NavBar(){

return(<Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand href="#home" >Gator´s Comida</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Menú</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Comidas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Combos </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <CartWidget/>
  </Navbar.Collapse>
</Container>
</Navbar>)
}



