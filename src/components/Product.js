import React, { Component } from 'react'
// import { Col, Row } from 'reactstrap'
// import Link from 'react-router-dom'

export default class Product extends Component {

    render() {
        const { id, name, img, about, group } = this.props.product;
        return (
            <div className='product-wraper p-5'>
                <p>{id}</p>

            </div>
        )
    }
}
