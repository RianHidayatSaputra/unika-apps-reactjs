import { Container, Row, Col, Card } from 'react-bootstrap'
import img1 from '../img/img1.png'
import { Link } from 'react-router-dom'

const Products = (props) => {
    return (
        // /single-product-woman/${props.id}
        //  onClick={() => props.getProduct(props.id)}
        <>
            <Container className="pt-5">
                <Row className="mt-5">
                    <Col xs={6} md={3} lg={3}>
                        <Link to={`/single-product-woman/${props.id}`} onClick={() => props.getProduct(props.id)} className="text-decoration-none">
                            <Card.Img variant="top" src={img1} />
                            <h6 className="text-center my-3 text-dark">{props.productName}</h6>
                            <p className="text-primary text-center">${props.productPrice}</p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Products
