import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import imgLogo from '../Img/Logo.png'



export default function NavBar(){
  
return(
<Navbar className="navbar" expand="lg">
<Container>
  <Link to= '/'>
    <img className="brand" src={imgLogo} alt="" />
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="text" to= '/category/Indumentaria' >Indumentaria</NavLink>
      <NavLink className="text" to= '/category/Amigurumis'>Amigurumis</NavLink>
    </Nav>
    
    <CartWidget/>
  </Navbar.Collapse>

</Container>
</Navbar>
)
}



