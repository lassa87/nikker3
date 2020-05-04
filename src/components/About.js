import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Slider from './ProductSlider'
import { Link } from 'react-router-dom'
import poster from '../resources-nikker/poster-nikker.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <div className="about-us text-justify p-5">
                            <h2 className='text-center'>O nama</h2>
                            <p> Proizvodno preduzeće Nikker posluje od 2010. godine i za kratko vreme, vrhunskom
                            tehnologijoom i kvalitetom proizvoda dobili smo najbolji odnos cene i kvaliteta i svrstali
                            se u grupu najznačajnijih proizvođača u ovoj branši na teritoriji Srbije.
                            Naša poslovna misija je da u Vaše kupatilo unesemo kvalitet i funkcionalnost.
                            Svi naši proizvodi ispunjavaju tehničke uslove kvaliteta za izradu i isporuku SRPS D.E2 105/1.
                            Proizvodi su izrađeni od medijapana i univera, bojeni poliuretanskim bojama.
                                    </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <img src={poster} width='100%' />
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Slider />

                        <Link to='/Products'>
                            <div className='products p-2 nav-custom'>
                                <h2>
                                    Pogledajte proizvode
                                </h2>
                            </div>
                        </Link>

                    </Col>
                </Row>
            </div>
        )
    }
}
