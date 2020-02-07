import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navigation from '../components/Navigation'
import im from '../resources-nikker/41.jpg'

export default class productDetail extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Container>
                    <Row>
                        <Col>
                            <h1>detalji</h1>
                            <img src={im} width='100%' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
