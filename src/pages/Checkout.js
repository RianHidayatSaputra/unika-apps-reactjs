import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [checkoutOrders, setCheckoutOrders] = useState([])
    const [fullName, setFullName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [townCity, setTownCity] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const history = useNavigate()
    const [error, setError] = useState({ errorFullName: '', errorStreetAddress: '', errorTownCity: '', errorPhone: '', errorEmail: '' })

    useEffect(function onMount() {
        axios.get('http://localhost:9000/trorders-detail').then((result) => {
            setCheckoutOrders(result.data.data)
        })
    }, [])

    const handleChangeFullName = (e) => {
        setFullName(e.target.value)
    }
    const handleChangeStreet = (e) => {
        setStreetAddress(e.target.value)
    }
    const handleChangeTownCity = (e) => {
        setTownCity(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }


    const handleSubmit = () => {

        const dataAdd = {
            fullName: fullName,
            streetAddress: streetAddress,
            townCity: townCity,
            phone: phone,
            email: email
        }

        axios.post('http://localhost:9000/address-customers/add', dataAdd).then((result) => {
            const dataOrders = JSON.stringify(checkoutOrders, null, 2)
            localStorage.setItem('checkoutOrders', dataOrders)

            console.log(localStorage.getItem('checkoutOrders'))

            setError({
                errorFullName: '',
                errorStreetAddress: '',
                errorTownCity: '',
                errorPhone: '',
                errorEmail: '',
            })

            setFullName('')
            setStreetAddress('')
            setTownCity('')
            setPhone('')
            setEmail('')

            axios.delete('http://localhost:9000/trorders-detail/delete').then((result) => {
                console.log(result)
                localStorage.removeItem('subTotal')
            })

        }).catch((err) => {
            setError({
                errorFullName: err.response.data.message.fullName,
                errorStreetAddress: err.response.data.message.streetAddress,
                errorTownCity: err.response.data.message.townCity,
                errorPhone: err.response.data.message.phone,
                errorEmail: err.response.data.message.email,
            })
        })

        // history('/home')
    }

    return (
        <Container className="mt-5 pt-5 checkout">
            <div>
                <Row>
                    <Col xs={8} md={6} lg={6}>
                        <p><span className="text-secondary">HOME</span>/CHECKOUT</p>
                        <h2 className="mt-5 mb-4">Billing Details</h2>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Full Name<i className="text-danger">*</i></label><br />
                                <input type="text" name="nama" value={fullName} className="border w-100 p-2 mt-2" onChange={handleChangeFullName} />
                                {
                                    error.errorFullName ? <p className="pt-2 text-danger fst-italic" style={{ fontSize: '0.8rem' }}>{error.errorFullName}</p> : ''
                                }
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Street Address<i className="text-danger">*</i></label><br />
                                <input type="text" name="street" value={streetAddress} className="border w-100 p-2 mt-2" placeholder="House number and street name" onChange={handleChangeStreet} />
                                {
                                    error.errorStreetAddress ? <p className="pt-2 text-danger fst-italic" style={{ fontSize: '0.8rem' }}>{error.errorStreetAddress}</p> : ''
                                }
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Town/City<i className="text-danger">*</i></label><br />
                                <input type="text" name="town" value={townCity} className="border w-100 p-2 mt-2" onChange={handleChangeTownCity} />
                                {
                                    error.errorTownCity ? <p className="pt-2 text-danger fst-italic" style={{ fontSize: '0.8rem' }}>{error.errorTownCity}</p> : ''
                                }
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Phone<i className="text-danger">*</i></label><br />
                                <input type="text" name="phone" value={phone} className="border w-100 p-2 mt-2" onChange={handleChangePhone} />
                                {
                                    error.errorPhone ? <p className="pt-2 text-danger fst-italic" style={{ fontSize: '0.8rem' }}>{error.errorPhone}</p> : ''
                                }
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <label className="mt-3">Email Address<i className="text-danger">*</i></label><br />
                                <input type="email" name="email" value={email} className="border w-100 p-2 mt-2" onChange={handleChangeEmail} />
                                {
                                    error.errorEmail ? <p className="pt-2 text-danger fst-italic" style={{ fontSize: '0.8rem' }}>{error.errorEmail}</p> : ''
                                }
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
                {checkoutOrders.map((cOrders, i) => {
                    return <Row className="border-start border-end border-bottom" key={i}>
                        <Col xs={9} md={7} lg={7} className="border-end">
                            <p className="mt-2 text-secondary">{cOrders.productsName}</p>
                        </Col>
                        <Col xs={3} md={5} lg={5} className="">
                            <p className="mt-2 text-secondary">${cOrders.subTotal}</p>
                        </Col>
                    </Row>
                })}
                <Row className="border-start border-end border-bottom">
                    <Col xs={9} md={7} lg={7} className="border-end">
                        <p className="mt-2 text-secondary">Subtotal</p>
                    </Col>
                    <Col xs={3} md={5} lg={5} className="">
                        <p className="mt-2 text-secondary">${localStorage.getItem('subTotal')}</p>
                    </Col>
                </Row>
                <Row className="border-start border-end border-bottom">
                    <Col xs={9} md={7} lg={7} className="border-end">

                    </Col>
                    <Col xs={3} md={5} lg={5} className="">
                        <p className="mt-2">${localStorage.getItem('subTotal')}</p>
                    </Col>
                </Row>
                <Row className="p-5 border mt-4 mb-5">
                    <p className="text-secondary p-4 bg-light">Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    <div className="d-flex justify-content-end btn-checkout">
                        <button type="submit" className="px-3 py-2 mt-5 text-white" onClick={handleSubmit}>PLACE ORDER</button>
                    </div>
                </Row>
            </div>
        </Container>
    )
}

export default Checkout
