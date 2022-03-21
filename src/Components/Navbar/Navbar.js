import React,{useState} from 'react'
import { Navbar, Nav, Container, Button,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css'
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);
  const [size, setsize] = useState(false)
  const changeSize = () => {
      if(window.scrollY >= 90) {
          setsize(true)
      } else {
          setsize(false)
      }
  }
  window.addEventListener("scroll", changeSize)
  return (
        <>
            <Navbar collapseOnSelect expand="lg"  className='top-navbar' fixed='top'>
            <Container fluid>
            <Navbar.Brand className={size ? "top-navbar-logo img top-navbar-logo-size img" : "top-navbar-logo img"}><Link to="/"><img src='images/logo4.png' alt='navbar logo'/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } style={{color:'white',transform:'Scale(1.3)'}}/></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto mb-2 mb-lg-0 top-navbar-links">
                <Nav.Link as={Link} to="/" onClick={closeMobileMenu}><i className="fas fa-home" />&nbsp;HOME</Nav.Link>
                <Nav.Link as={Link} to="/"  onClick={closeMobileMenu}>GENERAL DENTISTRY</Nav.Link>
                <Nav.Link as={Link} to="/cosmetic"  onClick={closeMobileMenu}>COSMETIC DENTISTRY</Nav.Link>
                <Nav.Link as={Link} to="/"  onClick={closeMobileMenu}>SURGICAL DENTISTRY</Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#doctor" >About Doctors</NavDropdown.Item>
                <NavDropdown.Item href="#about">About Clinic</NavDropdown.Item>
                <NavDropdown.Item ><Link to='/photo-gallery'>Photo Gallery</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to='/video-gallery'>Video Gallery</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/book-now" onClick={closeMobileMenu}><Button variant='danger'>BOOK NOW</Button></Nav.Link>
  
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
  )
}

export default NavBar;