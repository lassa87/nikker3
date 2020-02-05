import React, { Component } from 'react'
import Navigation from './Navigation'

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <Navigation />
                <div className="hero-text">
                    <h1>Dobrodošli u NIKKER</h1>
                    <p>Proizvodno preduzeće, sa Vama od 2010.god.</p>
                    {/* <button>Hire me</button> */}
                </div>
            </div>
        )
    }
}
