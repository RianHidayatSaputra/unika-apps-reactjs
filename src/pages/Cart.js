import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import img1 from '../img/img1.png'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const [ordersUser, setOrdersUser] = useState([])
    const dNone = 'd-none'
    const dBlock = 'd-block bg-white'
    const history = useNavigate()

    const getAllData = () => {
        axios.get('http://localhost:9000/trorders-detail').then((result) => {
            setOrdersUser(result.data.data)
        })
    }

    useEffect(function onMount() {
        getAllData()
    }, [])

    const addQty = (price, id, qty) => {

        const updateOrder = {
            qty: parseInt(qty) + 1,
            subTotal: price * qty + parseInt(price),
        }



        axios.put(`http://localhost:9000/trorders-detail-backend/update/${id}`, updateOrder).then((result) => {
            getAllData()
        })
        axios.put(`http://localhost:9000/trorders-detail/update/${id}`, updateOrder).then((result) => {
            getAllData()
        })


    }

    const lessQty = (price, id, qty, subTotal) => {

        const updateOrder = {
            subTotal: parseInt(subTotal) - parseInt(price),
            qty: parseInt(qty) - 1,
        }

        axios.put(`http://localhost:9000/trorders-detail/update/${id}`, updateOrder).then((result) => {
            getAllData()
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:9000/trorders-detail/delete/${id}`).then((res) => {
            getAllData()
        })
    }
    // console.log(ordersUserBackend)
    const handleSubmit = () => {
        const totalPrice = ordersUser.reduce((acc, curr) => acc + parseInt(curr.subTotal), 0)
        const totalQuantity = ordersUser.reduce((acc, curr) => acc + parseInt(curr.qty), 0)

        const addOrders = {
            totalQuantity: totalQuantity,
            totalPrice: totalPrice
        }


        axios.post('http://localhost:9000/trorders/add', addOrders).then((result) => {
            localStorage.setItem('subTotal', totalPrice)
        })

        axios.post('http://localhost:9000/trorders-detail-backend/add', ordersUser).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err.message)
        })

        history('/checkout')
    }


    // useEffect(function onOrdersUserChanged() {
    //     console.log(JSON.stringify(localStorage, null, 2))
    // }, [localStorage])
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
            <form onSubmit={handleSubmit}>
                {ordersUser.map(ordersUsr => {
                    {

                        return <Row className="border-bottom p-1 justify-content-between" key={ordersUsr._id}>
                            <Col xs={3} md={3} lg={3} className="d-flex justify-content-between align-items-center">
                                <Button variant="light" className="bg-white" onClick={() => handleDelete(ordersUsr._id)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>
                                <div className="w-25 bg-light" >
                                    <Card.Img variant="top" src={img1} style={{ objectFit: 'cover' }} />
                                </div>
                            </Col>
                            <Col xs={2} md={2} lg={2} className=" d-flex align-items-center">
                                <p>{ordersUsr.productsName}</p>
                            </Col>
                            <Col xs={2} md={2} lg={2} className=" d-flex align-items-center">
                                <p>${ordersUsr.price}</p>
                            </Col>
                            <Col xs={2} md={2} lg={2} className=" d-flex align-items-center">
                                <Button variant="light" className={ordersUsr.qty == 1 ? dNone : dBlock} onClick={() => lessQty(ordersUsr.price, ordersUsr.productsId, ordersUsr.qty, ordersUsr.subTotal)} id="btnLessAdd">-</Button>
                                <p className=" border py-1 w-50 text-center">{ordersUsr.qty}</p>
                                <Button variant="light" className="bg-white" onClick={() => addQty(ordersUsr.price, ordersUsr._id, ordersUsr.qty,)}>+</Button>
                            </Col>
                            <Col xs={2} md={2} lg={2} className=" d-flex align-items-center">
                                <p>${ordersUsr.subTotal}</p>
                            </Col>
                        </Row>
                    }
                })}
                <Row>
                    <Col xs={8} md={6} lg={6}>
                        <h2 className="mt-5">Cart Totals</h2>
                        <Row>
                            <Col xs={12} md={12} lg={12} className="d-flex justify-content-between border-bottom mt-3">
                                <p className="text-secondary">Subtotal</p>
                                <p>$
                                    {
                                        ordersUser.reduce((acc, curr) => acc + parseInt(curr.subTotal), 0)
                                    }
                                </p>
                            </Col>
                            <Col xs={12} md={12} lg={12} className="d-flex justify-content-between border-bottom mt-3">
                                <p className="text-secondary">Shopping Free</p>
                                <p className="text-secondary">FREE!</p>
                            </Col>
                            <Col xs={12} md={12} lg={12} className="d-flex justify-content-between border-bottom mt-3">
                                <p><strong>Total</strong></p>
                                <p>$
                                    {
                                        ordersUser.reduce((acc, curr) => acc + parseInt(curr.subTotal), 0)
                                    }
                                </p>
                            </Col>
                        </Row>
                        <button type="submit" className="px-4 py-3 mt-5 text-white">PROCEED TO CHECKOUT</button>
                    </Col>
                </Row >
            </form>
        </Container >
    )
}

export default Cart
