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
