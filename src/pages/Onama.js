import React, { Component } from 'react'
import Navigation from '../components/Navigation'

export default class Onama extends Component {
    render() {
        return (
            <div className="hero-oNama">
                <Navigation />
                <div className="hero-text">
                    <h1>O nama</h1>
                    <p> Proizvodno preduzeće Nikker posluje od 2010. godine i za kratko vreme, vrhunskom
                    tehnologijoom i kvalitetom proizvoda dobili smo najbolji odnos cene i kvaliteta i svrstali
                    se u grupu najznačajnijih proizvođača u ovoj branši na teritoriji Srbije.
                    Naša poslovna misija je da u Vaše kupatilo unesemo kvalitet i funkcionalnost.
                    Svi naši proizvodi ispunjavaju tehničke uslove kvaliteta za izradu i isporuku SRPS D.E2 105/1.
                    Proizvodi su izrađeni od medijapana i univera, bojeni poliuretanskim bojama.
                    </p>

                </div>
            </div>
        );
    }
}