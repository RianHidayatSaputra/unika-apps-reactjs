import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logoCrocodic from '../img/crocodic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import Products from '../pages/Products'

const Header = () => {

    let activeHome = 'text-dark ms-3 text-decoration-none'
    let activeProducts = 'text-dark ms-3 text-decoration-none'
    let activeAbout = 'text-dark ms-3 text-decoration-none'
    let activeContact = 'text-dark ms-3 text-decoration-none'

    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logoCrocodic} className="img-fluid ms-3" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="ms-4">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

                            <NavLink to="/home" className={({ isActive }) => isActive ? activeHome : 'ms-3 text-decoration-none text-secondary'}>Home</NavLink>
                            <NavLink to="/products" className={({ isActive }) => isActive ? activeProducts : 'ms-3 text-decoration-none text-secondary'}>Products</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? activeAbout : 'ms-3 text-decoration-none text-secondary'}>About</NavLink>
                            <NavLink to="/contact-us" className={({ isActive }) => isActive ? activeContact : 'ms-3 text-decoration-none text-secondary'}>Contact Us</NavLink>

                        </Nav>
                        <div className="d-flex mx-3  justify-content-end">
                            <Nav.Link href="#action5">
                                <FontAwesomeIcon icon={faUser} />
                            </Nav.Link>
                            <Nav.Link href="#action6">
                                <FontAwesomeIcon icon={faBagShopping} className="mx-3" />
                            </Nav.Link>
                            <Nav.Link href="#action7">
                                <FontAwesomeIcon icon={faBars} />
                            </Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Header
