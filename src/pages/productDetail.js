import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navigation from '../components/Navigation'
import { ProductConsumer } from '../components/ProductProvider'


export default class productDetail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, name, img, about, group, inCart, count, total } = value.detailProduct;
                    return (
                        <div>
                            <Navigation />
                            <Container>
                                <Row>
                                    <Col xs='4'>
                                        <img src={img} width='100%' />
                                    </Col>
                                    <Col xs='6'>
                                        <h2>{name}</h2><br />
                                        <p>{about}</p>

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
