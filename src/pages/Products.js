import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import Navigation from '../components/Navigation'
export default class Products extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>HELLO PROIZVODI</h1>
                <ProductCard />
            </div>
        )
    }
}
