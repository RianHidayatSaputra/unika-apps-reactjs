import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import imgabout1 from '../img/imgabout1.png'
import imgabout2 from '../img/imgabout2.png'
import hmjawad from '../img/hmjawad.png'
import furqanabid from '../img/furqanabid.png'
import abdullahah from '../img/abdullahah.png'
import abrarkhan from '../img/abrarkhan.png'
import quote from '../img/quote.png'
import stacy from '../img/stacy.png'
import tiffany from '../img/tiffany.png'
import james from '../img/james.png'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="mt-5 bg-about d-flex align-items-end">
                    <Container>
                        <h1 className=" mb-4 text-white">ABOUT NORTHSTAR</h1>
                    </Container>
                </div>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={9} md={6} lg={6} className="mt-3 mb-4">
                            <Card.Img variant="top" src={imgabout1} />
                            <div className="d-flex justify-content-center button">
                                <button className="rounded-5 border text-primary py-2 px-3">BUY NOW</button>
                            </div>
                        </Col>
                        <Col xs={9} md={6} lg={6} className="mt-3">
                            <Card.Img variant="top" src={imgabout2} />
                            <div className="d-flex justify-content-center button">
                                <button className="rounded-5 border text-primary py-2 px-3">BUY NOW</button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5 title">
                        <h2 className="text-center">The Founders</h2>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={hmjawad} />
                            <h6 className="text-center my-3">HM Jawad</h6>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={furqanabid} />
                            <h6 className="text-center my-3">Furqan Abid</h6>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={abdullahah} />
                            <h6 className="text-center my-3">Abdullah Ah</h6>
                        </Col>
                        <Col xs={6} md={3} lg={3}>
                            <Card.Img variant="top" src={abrarkhan} />
                            <h6 className="text-center my-3">Abrar Khan</h6>
                        </Col>
                    </Row>
                    <Row className="mt-5 title">
                        <h2 className="text-center">Testimonials</h2>
                    </Row>
                    <Row className="mt-4 justify-content-center">
                        <Col xs={7} md={3} lg={3} className="d-flex justify-content-end">
                            <Card.Img variant="top" src={stacy} style={{ width: '230px', height: '230px' }} />
                        </Col>
                        <Col xs={10} md={8} lg={8}>
                            <div className="quote">
                                <Card.Img className="img-fluid" variant="top" src={quote} style={{ width: '37px', height: '28px' }} />
                                <h6 className="mt-2">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</h6>
                                <p>Stacy</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 justify-content-center">
                        <Col xs={7} md={3} lg={3} className="d-flex justify-content-end">
                            <Card.Img variant="top" src={tiffany} style={{ width: '230px', height: '230px' }} />
                        </Col>
                        <Col xs={10} md={8} lg={8}>
                            <div className="quote">
                                <Card.Img className="img-fluid" variant="top" src={quote} style={{ width: '37px', height: '28px' }} />
                                <h6 className="mt-2">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</h6>
                                <p>Tiffany</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 justify-content-center mb-5">
                        <Col xs={7} md={3} lg={3} className="d-flex justify-content-end">
                            <Card.Img variant="top" src={james} style={{ width: '230px', height: '230px' }} />
                        </Col>
                        <Col xs={10} md={8} lg={8}>
                            <div className="quote">
                                <Card.Img className="img-fluid" variant="top" src={quote} style={{ width: '37px', height: '28px' }} />
                                <h6 className="mt-2">Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</h6>
                                <p>James</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
