import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navigation from '../components/Navigation'
import { ProductConsumer } from '../components/ProductProvider'


export default class productDetail extends Component {
    render() {

        return (
            <ProductConsumer>
                {value => {
                    const { name, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, about } = value.detailProduct;
                    return (
                        <div>
                            <Navigation />
                            <Container>
                                <Row>
                                    <Col md='6'>
                                        <h2>{name}</h2><br />
                                        <p>{about}</p>
                                    </Col>
                                    <Col md='6'>
                                        <Row>
                                            <Col sm='6'>
                                                <img src={img2} alt="d" width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img3} alt="s" width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img4} alt="a" width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img5} width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img6} width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img7} width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img8} width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img9} width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img10} width='100%' />
                                            </Col>
                                            <Col sm='6'>
                                                <img src={img11} width='100%' />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    );
                }}

            </ProductConsumer>

        )
    }
}
