import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import singleproductwoman from '../img/singleproductwoman.png'
import iconstarcolor from '../img/iconstarcolor.png'
import iconstarnocolor from '../img/iconstarnocolor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class SingleProductWoman extends Component {
  render() {
    return (
      <Container className="mt-5 mb-5">
        <Row className="side">
          <Col xs={12} md={6} lg={6} className="tes">
            <Card.Img variant="top" src={singleproductwoman} />
            <div className="diskon">
              <label className="rounded-circle ms-3 px-2 py-2">-24%</label>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="mt-2">
            <span><span className="text-secondary">HOME</span>/SHOP</span>
            <h5 className="mt-3">Plain White Shirt</h5>
            <div className="d-flex rate">
              <Card.Img variant="top" src={iconstarcolor} style={{ width: '15px', height: '14px' }} />
              <Card.Img variant="top" src={iconstarcolor} style={{ width: '15px', height: '14px' }} />
              <Card.Img variant="top" src={iconstarcolor} style={{ width: '15px', height: '14px' }} />
              <Card.Img variant="top" src={iconstarcolor} style={{ width: '15px', height: '14px' }} />
              <Card.Img variant="top" src={iconstarnocolor} style={{ width: '15px', height: '14px' }} />
              <p>(15)</p>
            </div>
            <div className="price d-flex mt-3">
              <p className="text-decoration-line-through text-secondary">$69.00</p>
              <p className="ms-2 text-primary">$59.00</p>
            </div>
            <div className="description">
              <p>A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.</p>
            </div>
            <form className="mt-5">
              <select name="size" className="px-3 py-2 bg-light">
                <option>Select Size</option>
                <option>S</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select><br></br>
              <button type="submit" className="py-2 px-3 mt-4 border text-white">ADD TO CART</button>
            </form>
            <div className="category">
              <p className="mt-5"><strong>Category:</strong> Women, Polo, Casual</p>
              <p><strong>Tags:</strong> Modern, Design, Cotton</p>
            </div>
            <Row className="mt-5">
              <Col xs={2} md={1} lg={1} className="bg-light rounded-circle">

              </Col>
              <Col xs={2} md={1} lg={1} className="bg-light rounded-circle mx-2">

              </Col>
              <Col xs={2} md={1} lg={1} className="bg-light rounded-circle">

              </Col>
              <Col xs={2} md={1} lg={1} className="bg-light rounded-circle mx-2">

              </Col>
              <Col xs={2} md={1} lg={1} className="bg-light rounded-circle p-2 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faEnvelope} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Container>
          <Row className="mt-5">
            <Col xs="12" md={6} lg={6}>
              <Row className="justify-content-between">
                <Col xs={6} md={3} lg={3} className="bg-light mt-2 pt-5">
                  <p className="text-light">TESTING</p>
                </Col>
                <Col xs={5} md={2} lg={2} className="bg-light mt-2 pt-5">
                  <p className="text-light">TESTING</p>
                </Col>
                <Col xs={5} md={3} lg={3} className="bg-light mt-2 pt-5">
                  <p className="text-light">TESTING</p>
                </Col>
                <Col xs={6} md={2} lg={2} className="bg-light mt-2 pt-5">
                  <p className="text-light">TESTING</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="d-flex mt-5">
          <button className="px-3 py-2 bg-white border">Description</button>
          <button className="px-3 py-2 border bg-light">Reviews(0)</button>
        </div>
        <Container>
          <Row className="border">
            <p className="p-5">
              A key objective is engaging digital marketing customers and allowing them to interact with the brand through servicing and delivery of digital media. Information is easy to access at a fast rate through the use of digital communications. Users with access to the Internet can use many digital mediums, such as Facebook, YouTube, Forums, and Email etc. Through Digital communications it creates a Multi-communication channel where information can be quickly exchanged around the world by anyone without any regard to whom they are.[28] Social segregation plays no part through social mediums due to lack of face to face communication and information being wide spread instead to a selective audience.</p>
          </Row>
        </Container>
      </Container >
    )
  }
}

