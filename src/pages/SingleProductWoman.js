import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import singleproductwoman from '../img/singleproductwoman.png'
import iconstarcolor from '../img/iconstarcolor.png'
import iconstarnocolor from '../img/iconstarnocolor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SingleProductWoman = () => {

  const history = useNavigate()

  const handleSubmit = () => {

    const handleData = {
      price: localStorage.getItem('productPrice'),
      productsId: localStorage.getItem('_id'),
      productsName: localStorage.getItem('productName'),
      subTotal: localStorage.getItem('productPrice'),
      qty: 1
    }

    axios.post('http://localhost:9000/trorders-detail/add', handleData).then((result) => {
      localStorage.setItem('productNameOrder', localStorage.getItem('productName'))
    }).catch((err) => {
      console.log(err.message)
    })

    axios.post('http://localhost:9000/trorders-detail-backend/add', handleData).then((result) => {

    }).catch((err) => {
      console.log(err.message)
    })

    history('/cart')
  }

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
          <form className="mt-5" onSubmit={() => handleSubmit(localStorage.getItem('_id'))}>
            <h5 className="mt-3">{localStorage.getItem('productName')}</h5>
            <div className="d-flex rate">
              <Card.Img variant="top" src={iconstarcolor} style={{ width: '15px', height: '14px' }} />
              <Card.Img variant="top" src={iconstarcolor} style={{ width: '15px', height: '14px' }} />
              <Card.Img variant="top" src={iconstarcolor} style={{ width: '15px', height: '14px' }} />
              <Card.Img variant="top" src={iconstarcolor} style={{ width: '15px', height: '14px' }} />
              <Card.Img variant="top" src={iconstarnocolor} style={{ width: '15px', height: '14px' }} />
              <p>(15)</p>
            </div>
            <div className="price d-flex mt-3">
              <p className="text-decoration-line-through text-secondary">${localStorage.getItem('productPrice')}</p>
              <p className="ms-2 text-primary">${localStorage.getItem('productPrice')}</p>
            </div>
            <div className="description">
              <p>{localStorage.getItem('description')}</p>
            </div>
            <select name="size" className="px-3 py-2 bg-light">
              <option >Select Size</option>
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

export default SingleProductWoman

