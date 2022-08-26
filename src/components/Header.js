import React, { Component, useEffect, useState } from 'react'
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
import SingleProductWoman from '../pages/SingleProductWoman'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import axios from 'axios'

function Header() {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})

    useEffect(function onMount() {
        axios.get('http://localhost:9000/products').then((result) => {
            setProducts(result.data.data)
        })
    }, [])

    // useEffect(function onProductsChanged() {
    //     console.log(JSON.stringify(products, null, 2))
    // }, [products])

    const coba = (id) => {

        axios.get(`http://localhost:9000/products/edit/${id}`).then((result) => {
            setProduct(result.data.data)
            localStorage.setItem('_id', result.data.data._id)
            localStorage.removeItem('idP')
            localStorage.setItem('productName', result.data.data.productName)
            localStorage.setItem('productCode', result.data.data.productCode)
            localStorage.setItem('productPrice', result.data.data.productPrice)
            localStorage.setItem('productPhoto', result.data.data.productPhoto)
            localStorage.setItem('flag', result.data.data.flag)
            localStorage.setItem('description', result.data.data.description)
            localStorage.setItem('createdAt', result.data.data.createdAt)
            localStorage.setItem('updatedAt', result.data.data.updatedAt)
            // console.log(localStorage)
        })
    }

    const activeMenu = 'text-dark text-decoration-none ms-3'
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logoCrocodic} className="img-fluid ms-3" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="ms-4">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavLink to="/home" className={({ isActive }) => isActive ? activeMenu : 'ms-3 text-decoration-none text-secondary'}>Home</NavLink>
                            <NavLink to="/products" className={({ isActive }) => isActive ? activeMenu : 'ms-3 text-decoration-none text-secondary'}>Products</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? activeMenu : 'ms-3 text-decoration-none text-secondary'}>About</NavLink>
                            <NavLink to="/contact-us" className={({ isActive }) => isActive ? activeMenu : 'ms-3 text-decoration-none text-secondary'}>Contact Us</NavLink>

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
                <Route path='/products' element={
                    products.map(products => {
                        return (
                            <Products
                                key={products._id}
                                id={products._id}
                                data={products}
                                productName={products.productName}
                                productPrice={products.productPrice}
                                getProduct={coba}
                            />
                        )
                    })
                } />
                <Route
                    path="/single-product-woman/:id"
                    element={
                        < SingleProductWoman
                            key={product._id}
                            product={product}
                        />
                    }
                />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Header
