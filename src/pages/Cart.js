import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default class Cart extends Component {
    render() {
        return (
            <Container className="mt-5 pt-5 cart">
                <p><span className="text-secondary">HOME</span>/CART</p>
                <Row className="mt-5 border-bottom justify-content-between">
                    <Col xs={3} md={3} lg={3}>

                    </Col>
                    <Col xs={2} md={2} lg={2}>
                        <h6>Product</h6>
                    </Col>
                    <Col xs={2} md={2} lg={2}>
                        <h6>Price</h6>
                    </Col>
                    <Col xs={2} md={2} lg={2}>
                        <h6>Quantity</h6>
                    </Col>
                    <Col xs={2} md={2} lg={2}>
                        <h6>Total</h6>
                    </Col>
                </Row>
                <Row className="border-bottom p-1 justify-content-between">
                    <Col xs={3} md={3} lg={3} className="d-flex justify-content-between align-items-center">
                        <Nav.Link href="#action7">
                            <FontAwesomeIcon icon={faXmark} />
                        </Nav.Link>
                        <div className="w-25 py-2 px-4 bg-light">
                            <p className="text-light ">tes</p>
                        </div>
                    </Col>
                    <Col xs={2} md={2} lg={2} className=" d-flex align-items-center">
                        <p>Plain White Shirt</p>
                    </Col>
                    <Col xs={2} md={2} lg={2} className=" d-flex align-items-center">
                        <p>$59.00</p>
                    </Col>
                    <Col xs={2} md={2} lg={2} className=" d-flex align-items-center">
                        <p className=" border px-4 py-2 w-50 text-center">1</p>
                    </Col>
                    <Col xs={2} md={2} lg={2} className=" d-flex align-items-center">
                        <p>$59.00</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} md={6} lg={6}>
                        <h2 className="mt-5">Cart Totals</h2>
                        <Row>
                            <Col xs={12} md={12} lg={12} className="d-flex justify-content-between border-bottom mt-3">
                                <p className="text-secondary">Subtotal</p>
                                <p>$59.00</p>
                            </Col>
                            <Col xs={12} md={12} lg={12} className="d-flex justify-content-between border-bottom mt-3">
                                <p className="text-secondary">Shopping Free</p>
                                <p className="text-secondary">FREE!</p>
                            </Col>
                            <Col xs={12} md={12} lg={12} className="d-flex justify-content-between border-bottom mt-3">
                                <p><strong>Total</strong></p>
                                <p>$59.00</p>
                            </Col>
                        </Row>
                        <button type="submit" className="px-4 py-3 mt-5 text-white">PROCEED TO CHECKOUT</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}
