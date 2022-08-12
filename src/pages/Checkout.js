import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Checkout extends Component {
    render() {
        return (
            <Container className="mt-5 pt-5 checkout">
                <Row>
                    <Col xs={8} md={6} lg={6}>
                        <p><span className="text-secondary">HOME</span>/CHECKOUT</p>
                        <h2 className="mt-5 mb-4">Billing Details</h2>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Full Name<i className="text-danger">*</i></label><br />
                                <input type="text" name="nama" className="border w-100 p-2 mt-2" />
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Street Address<i className="text-danger">*</i></label><br />
                                <input type="text" name="street" className="border w-100 p-2 mt-2" placeholder="House number and street name" />
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Town/City<i className="text-danger">*</i></label><br />
                                <input type="text" name="town" className="border w-100 p-2 mt-2" />
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Phone<i className="text-danger">*</i></label><br />
                                <input type="text" name="phone" className="border w-100 p-2 mt-2" />
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Email Address<i className="text-danger">*</i></label><br />
                                <input type="email" name="email" className="border w-100 p-2 mt-2" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <h2 className="mt-5 mb-4">Billing Details</h2>
                <Row className="border">
                    <Col xs={9} md={7} lg={7} className="border-end">
                        <p className="mt-2"><strong>Product</strong></p>
                    </Col>
                    <Col xs={3} md={5} lg={5} className="">
                        <p className="mt-2"><strong>Total</strong></p>
                    </Col>
                </Row>
                <Row className="border-start border-end border-bottom">
                    <Col xs={9} md={7} lg={7} className="border-end">
                        <p className="mt-2 text-secondary">Plain White Shirt</p>
                    </Col>
                    <Col xs={3} md={5} lg={5} className="">
                        <p className="mt-2 text-secondary">$59.00</p>
                    </Col>
                </Row>
                <Row className="border-start border-end border-bottom">
                    <Col xs={9} md={7} lg={7} className="border-end">
                        <p className="mt-2 text-secondary">Subtotal</p>
                    </Col>
                    <Col xs={3} md={5} lg={5} className="">
                        <p className="mt-2 text-secondary">$59.00</p>
                    </Col>
                </Row>
                <Row className="border-start border-end border-bottom">
                    <Col xs={9} md={7} lg={7} className="border-end">

                    </Col>
                    <Col xs={3} md={5} lg={5} className="">
                        <p className="mt-2">$59.00</p>
                    </Col>
                </Row>
                <Row className="p-5 border mt-4 mb-5">
                    <p className="text-secondary p-4 bg-light">Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    <div className="d-flex justify-content-end btn-checkout">
                        <button type="submit" className="px-3 py-2 mt-5 text-white">PLACE ORDER</button>
                    </div>
                </Row>
            </Container>
        )
    }
}
