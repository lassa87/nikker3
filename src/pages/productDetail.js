import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navigation from '../components/Navigation'
import { ProductConsumer } from '../components/ProductProvider'
import { UncontrolledCarousel } from 'reactstrap';


export default class productDetail extends Component {
    render() {

        return (
            <ProductConsumer>
                {value => {
                    const { name, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, about } = value.detailProduct;
                    const items = [
                        {
                            src: img2,
                            altText: 'Slide 1',
                            caption: '',
                            header: '',
                            key: '1'
                        },
                        {
                            src: img3,
                            altText: 'Slide 2',
                            caption: '',
                            header: '',
                            key: '2'
                        },
                        {
                            src: img4,
                            altText: 'Slide 3',
                            caption: '',
                            header: '',
                            key: '3'
                        },
                        {
                            src: img5,
                            altText: 'Slide 4',
                            caption: '',
                            header: '',
                            key: '4'
                        },
                    ];

                    const Slider = () => <UncontrolledCarousel items={items} />;
                    return (
                        <div>
                            <Navigation />
                            <Container>
                                <Row>
                                    <Col md='6'>
                                        {Slider()}
                                    </Col>
                                    <Col md='6' className='darkBc p-5'>
                                        <Row>
                                            <h4>Opis proizvoda</h4><br />
                                            <p><strong>Korpus :</strong> {name}<br />
                                                <strong>Vrata :</strong> bela visoki sjaj <br />
                                                <strong>Materijal:</strong> {about}<br />
                                                <strong>Prodaja po elementima .</strong><br />
                                                <strong>U cenu ormarića sa ogledalom uključena je rasveta.</strong>
                                            </p>

                                        </Row>
                                        <Row>
                                            <Col xs='3' onClick={() => { window.open(img2) }} className='cpoint'>
                                                <img src={img2} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img3) }} className='cpoint'>
                                                <img src={img3} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img4) }} className='cpoint'>
                                                <img src={img4} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img5) }} className='cpoint'>
                                                <img src={img5} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img6) }} className='cpoint'>
                                                <img src={img6} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img7) }} className='cpoint'>
                                                <img src={img7} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img8) }} className='cpoint'>
                                                <img src={img8} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img9) }} className='cpoint'>
                                                <img src={img9} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img10) }} className='cpoint'>
                                                <img src={img10} width='100%' />
                                            </Col>
                                            <Col xs='3' onClick={() => { window.open(img11) }} className='cpoint'>
                                                <img src={img11} width='100%' />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    );
                }}

            </ProductConsumer>

        )
    }
}
