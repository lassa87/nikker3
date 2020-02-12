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
                    <Col sm='12' md='6' lg='6' className='productContainer' onClick={() => value.handleDetail(id)}>
                        <Link to='/productDetail'>
                            <div className='p-5 mt-5'>
                                <Row>
                                    <Col xs='6'>
                                        <img src={img} width='100%' alt='product' />
                                    </Col>
                                    <Col xs='6'>
                                        <h4 className='productTitle'>{name}</h4>
                                        <p>Opis proizvoda: {about}</p>
                                    </Col>
                                </Row>
                            </div>
                        </Link>
                    </Col >
                )}
            </ProductConsumer>
        )
    }
}
