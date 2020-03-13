import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import Navigation from '../components/Navigation'
import { ProductConsumer } from '../components/ProductProvider'
import { UncontrolledCarousel } from 'reactstrap';



export default class productDetail extends Component {
    render() {

        return (

            <ProductConsumer>
                {value => {
                    const { name, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, b1, b2, b3, b4, b5, b6, about,
                        vName, vSifra, vDimenzije, ogName, ogSifra1, ogDimenzije1, ogSifra2, ogDimenzije2, ogSifra3, ogDimenzije3, ormName, ormSifra1, ormDimenzije1, ormSifra2, ormDimenzije2, ormSifra3, ormDimenzije3 } = value.detailProduct;
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
                        {
                            src: img6,
                            altText: 'Slide 5',
                            caption: '',
                            header: '',
                            key: '5'
                        },
                    ];

                    const Slider = () => <UncontrolledCarousel items={items} />;
                    const Example = (props) => {
                        return (
                            <Table striped>
                                <thead>
                                    <tr><th>{ormName}</th></tr>
                                    <tr>
                                        <th>Sifra</th>
                                        <th>Dimenzije</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ormSifra1}</td>
                                        <td>{ormDimenzije1}</td>
                                    </tr>
                                    <tr>
                                        <td>{ormSifra2}</td>
                                        <td>{ormDimenzije2}</td>
                                    </tr>
                                    <tr>
                                        <td>{ormSifra3}</td>
                                        <td>{ormDimenzije3}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr><th>{ogName}</th></tr>
                                    <tr>
                                        <th>Sifra</th>
                                        <th>Dimenzije</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ogSifra1}</td>
                                        <td>{ogDimenzije1}</td>
                                    </tr>
                                    <tr>
                                        <td>{ogSifra2}</td>
                                        <td>{ogDimenzije2}</td>
                                    </tr>
                                    <tr>
                                        <td>{ogSifra3}</td>
                                        <td>{ogDimenzije3}</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr><th>{vName}</th></tr>
                                    <tr>
                                        <th>Sifra</th>
                                        <th>Dimenzije</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{vSifra}</td>
                                        <td>{vDimenzije}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        );
                    }

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
                                                <strong>Front :</strong> bela visoki sjaj <br />
                                                <strong>Materijal:</strong> {about}<br />
                                                <strong>Prodaja po elementima .</strong><br />
                                                <strong>U cenu ormarića sa ogledalom uključena je rasveta.</strong>
                                            </p>

                                        </Row>
                                        <Row>
                                            <Col >
                                                {Example()}
                                            </Col>

                                        </Row>
                                    </Col>
                                </Row>
                                <br />
                                <Col className='p-3' md={{ size: 10, offset: 2 }}>
                                    <Row className='align-self-center'>
                                        <Col xs='2'>
                                            <img src={b1} width='100%' />
                                        </Col>
                                        <Col xs='2' >
                                            <img src={b2} width='100%' />
                                        </Col>
                                        <Col xs='2' >
                                            <img src={b3} width='100%' />
                                        </Col>
                                        <Col xs='2' >
                                            <img src={b4} width='100%' />
                                        </Col>
                                        <Col xs='2' >
                                            <img src={b5} width='100%' />
                                        </Col>
                                        <Col xs='2' >
                                            <img src={b6} width='100%' />
                                        </Col>
                                    </Row>
                                </Col>
                            </Container>
                        </div>
                    );
                }}

            </ProductConsumer>

        )
    }
}
