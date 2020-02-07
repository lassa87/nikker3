import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
// import Link from 'react-router-dom'

export default class Product extends Component {

    render() {
        const { id, name, img, about, group } = this.props.product;
        return (
            <Col sm='12' md='6' lg='6'>
                <div ClassName='p-5 mt-5'>
                    <Row>
                        <Col xs='4'>
                            <img src={img} width='100%' />
                        </Col>
                        <Col xs='8'>
                            <h4>{name}</h4>
                            <p>Opis proizvoda: {about}</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }
}
