import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import img7 from '../img/img7.png'
import img8 from '../img/img8.png'
import icontruk from '../img/icontruk.png'
import iconbundar from '../img/iconbundar.png'
import iconrefresh from '../img/iconrefresh.png'
import iconsidikjari from '../img/iconsidikjari.png'
import img9 from '../img/img9.png'
import img10 from '../img/img10.png'
import img11 from '../img/img11.png'
import img12 from '../img/img12.png'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="bg-section-one mt-5 d-flex align-items-center">
                    <Container className=" d-flex justify-content-end">
                        <div className="text">
                            <h1 className="text-white text-center">STYLIST PICK BEAT</h1>
                            <h1 className="text-center text-white">THE HEAT</h1>
                            <div className="d-flex justify-content-center">
                                <button className="border m-auto bg-transparent text-white border-3 border-white rounded-2 py-2 px-3">Shop Now</button>
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <Row className="mt-5 title">
                        <h2 className="text-center">Discover New Arrival</h2>
                        <p className="text-center">Recently added shirts!</p>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img1} />
                            <h6 className="text-center my-3">Plain White Shirt</h6>
                            <p className="text-primary text-center">$29.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img2} />
                            <h6 className="text-center my-3">Denim Jacket</h6>
                            <p className="text-primary text-center">$69.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img3} />
                            <h6 className="text-center my-3">Black Polo Shirt</h6>
                            <p className="text-primary text-center">$49.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img4} />
                            <h6 className="text-center my-3">Blue SweatShirt</h6>
                            <p className="text-primary text-center">$79.00</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img5} />
                            <h6 className="text-center my-3">Bllue Plain Shirt</h6>
                            <p className="text-primary text-center">$49.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img6} />
                            <h6 className="text-center my-3">Dark Blue Shirt</h6>
                            <p className="text-primary text-center">$89.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img7} />
                            <h6 className="text-center my-3">Outcast T Shirt</h6>
                            <p className="text-primary text-center">$19.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img8} />
                            <h6 className="text-center my-3">Polo Plain Shirt</h6>
                            <p className="text-primary text-center">$29.00</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={6} md={3} lg={3} className="d-flex">
                            <Card.Img variant="top" src={icontruk} style={{ width: '24px', height: '24px' }} />
                            <div className="ms-2">
                                <h5>FREE SHIPPING</h5>
                                <p>Enjoy free shipping on all orders above $100</p>
                            </div>
                        </Col>
                        <Col xs={6} md={3} lg={3} className="d-flex">
                            <Card.Img variant="top" src={iconbundar} style={{ width: '24px', height: '24px' }} />
                            <div className="ms-2">
                                <h5>SUPPORT 24/7</h5>
                                <p>Our support team is thereto help you for queries</p>
                            </div>
                        </Col>
                        <Col xs={6} md={3} lg={3} className="d-flex">
                            <Card.Img variant="top" src={iconrefresh} style={{ width: '24px', height: '24px' }} />
                            <div className="ms-2">
                                <h5>30 DAYS RETURN</h5>
                                <p>Simply return it within 30 days for an exchange.</p>
                            </div>
                        </Col>
                        <Col xs={6} md={3} lg={3} className="d-flex">
                            <Card.Img variant="top" src={iconsidikjari} style={{ width: '24px', height: '24px' }} />
                            <div className="ms-2">
                                <h5>100% PAYMENT SECURE</h5>
                                <p>Oue payment are secured with 256 bit encryption</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} lg={6} className="bg-dark mt-2 d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                            <div className="text-white w-75">
                                <h3 className="text-center">PEACE OF MIND</h3>
                                <p className="text-center">A one-stop platform for all your fashion needs, hassle free, Buy with a peace of mind.</p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button className="border bg-light px-3 py-2">BUY NOW</button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={7} md={5} lg={5} className="bg-dark ms-3 mt-2 d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                            <div className="text-white w-75">
                                <h3 className="text-center">BUY 2 GET 1 FREE</h3>
                                <p className="text-center">End of season sale. Buy any 2 item of your choice and get 1 free.</p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button className="border bg-light px-3 py-2">BUY NOW</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5 title">
                        <h2 className="text-center">Top Sellers</h2>
                        <p className="text-center">Browse our top-selling products</p>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img9} />
                            <h6 className="text-center my-3">Gray Polo Shirt</h6>
                            <p className="text-primary text-center">$49.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img10} />
                            <h6 className="text-center my-3">Red Shirt</h6>
                            <p className="text-primary text-center">$69.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img11} />
                            <h6 className="text-center my-3">Polo White Shirt</h6>
                            <p className="text-primary text-center">$29.00</p>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={img12} />
                            <h6 className="text-center my-3">Pink Casual Shirt</h6>
                            <p className="text-primary text-center">$39.00</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

