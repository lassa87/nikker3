import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navigation from '../components/Navigation'
import { ProductConsumer } from '../components/ProductProvider'
import Product from '../components/Product'

export default class Products extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>stranica proizvoda</h1>
                <Container>
                    <Row>
                        <ProductConsumer>
                            {value => {
                                return value.products.map(
                                    product => {
                                        return <Product key={product.id} product={product} />;
                                    }
                                )
                            }

                            }
                        </ProductConsumer>
                    </Row>
                </Container>
            </div>
        )
    }
}
