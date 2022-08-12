import React, { Component } from 'react'
import { Container, Row, Col, Form, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import visaicon from '../img/visaicon.png'
import cardicon from '../img/cardicon.png'
import paypal from '../img/paypal.png'
import visaelektron from '../img/visaelektron.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="bg-light">
                <Container>
                    <Row className="border-bottom border-2 pb-5 pt-4 mt-4 justify-content-center">
                        <Col xs={4} md={3} lg={3} className="mt-2 deskripsi">
                            <h4>COMPANY INFO</h4>
                            <p className="mt-3">About Us</p>
                            <p>Latest Post</p>
                            <p>Contact Us</p>
                            <p>Shop</p>
                        </Col>
                        <Col xs={4} md={3} lg={3} className="mt-2 deskripsi">
                            <h4>HELP LINKS</h4>
                            <p className="mt-3">Tracking</p>
                            <p>Order Status</p>
                            <p>Delivery</p>
                            <p>Shipping Info</p>
                            <p>FAQ</p>
                        </Col>
                        <Col xs={4} md={3} lg={3} className="mt-2 deskripsi">
                            <h4>USEFUL LINKS</h4>
                            <p className="mt-3">Special Offers</p>
                            <p>Gift Cardst</p>
                            <p>Advertising</p>
                            <p>Terms Of Use</p>
                        </Col>
                        <Col xs={10} md={3} lg={3} className="mt-2 deskripsi">
                            <h4 className="text-center">GET IN THE KNOW</h4>
                            <Form className="d-flex form mt-3 justify-content-center">
                                <input type="email" name="email" placeholder="Enter Email.." className="border-bottom bg-light" />
                                <button className="bg-light"> <FontAwesomeIcon icon={faCaretRight} /></button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="justify-content-between pb-2">
                        <Col xs={12} md={5} lg={6} className="footer mt-3">
                            <p className="text-center">&copy; 2022 Crocodic eCommerce</p>
                            <p className="text-center">Privacy Police Terms & Conditions</p>
                        </Col>
                        <Col xs={10} md={5} lg={6} className="d-flex justify-content-end mt-2">
                            <div>
                                <Card.Img variant="top" src={visaicon} style={{ width: '56px', height: '34px' }} />
                                <Card.Img variant="top" src={cardicon} style={{ width: '56px', height: '34px' }} />
                                <Card.Img variant="top" src={paypal} style={{ width: '56px', height: '34px' }} />
                                <Card.Img variant="top" src={visaelektron} style={{ width: '56px', height: '34px' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
