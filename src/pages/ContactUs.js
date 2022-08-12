import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class ContactUs extends Component {
    render() {
        return (
            <>
                <div className="mt-5 bg-contact d-flex align-items-end">
                    <Container>
                        <h1 className=" mb-5 text-white">CONTACT US</h1>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="mt-4 text">
                            <h4>We would love to hear from you.</h4>
                            <p>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</p>
                            <Row className="mt-4">
                                <Col xs={7} md={7} lg={7}>
                                    <form>
                                        <Row>
                                            <Col xs={12} md={6} lg={6} className="mt-2">
                                                <label>Nama</label>
                                                <input type="text" name="nama" className="form-control" />
                                            </Col>
                                            <Col xs={12} md={6} lg={6} className="mt-2">
                                                <label>Email</label>
                                                <input type="email" name="email" className="form-control" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} md={12} lg={12} className="mt-2">
                                                <label>Message</label>
                                                <textarea rows={6} cols={100} className="form-control"></textarea>
                                                <button type="submit" className="py-2 px-3 mt-4 border text-white">Send Message</button>
                                            </Col>
                                        </Row>
                                    </form>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                    <h4>Visit Us</h4>
                                    <p>UET Lahore, Punjab, Pakistan Phone: +923039898987</p>
                                    <h4>Get In Touch</h4>
                                    <p>You can get in touch with us on this provided email.</p>
                                    <p>Email:<br />hmjawad@gmail.com</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
