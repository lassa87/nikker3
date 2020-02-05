import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'

export default class Products extends Component {
    render() {
        return (
            <div>
                <h1>Hello from PRODUCTS</h1>

                <ProductCard />
            </div>
        )
    }
}
