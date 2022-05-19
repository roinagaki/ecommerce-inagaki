import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


export default function NavBar(){

return(
<Navbar className="navbar" expand="lg">
<Container>
  <Link to= '/'>
  <Navbar.Brand className="brand" href="#home" >ADELFA</Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <NavLink to= '/category/Indumentaria' >Indumentaria</NavLink>
      <NavLink to= '/category/Amigurumis'>Amigurumis</NavLink>
    </Nav>
    <CartWidget/>
  </Navbar.Collapse>

</Container>
</Navbar>
)
}



