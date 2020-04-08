import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../components/ProductProvider'


export default class Product extends Component {

    render() {
        const { id, name, img, about } = this.props.product;
        return (
            <ProductConsumer>

                {value => (
                    <Col sm='6' md='3' lg='3' className='productContainer' onClick={() => value.handleDetail(id)}>
                        <Link to='/productDetail'>
                            <div className='p-5 mt-5' style={{ backgroundColor: 'white' }}>
                                <Row>
                                    <img src={img} width='100%' alt='product' />
                                </Row>
                                <Row>
                                    <h4 className='productTitle'>{name}</h4>
                                </Row>
                            </div>
                        </Link>
                    </Col >
                )}

            </ProductConsumer>
        )
    }
}
