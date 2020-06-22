import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'reactstrap'
import Navigation from '../components/Navigation'
import { ProductConsumer } from '../components/ProductProvider'
import Slider from "react-slick";



export default class productDetail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { name, img2, b1, b2, b3, b4, b5, b6, about, ogName2, ogName3, ogName4, ormName2, ormName3, ormName4, vName, vSifra, vDimenzije, vName2, vSifra2, vDimenzije2, ogName, ogSifra1, ogDimenzije1, ogSifra2, ogDimenzije2, ogSifra3, ogDimenzije3, ogSifra4, ogDimenzije4, ormName, ormSifra1, ormDimenzije1, ormSifra2, ormDimenzije2, ormSifra3, ormDimenzije3, ormSifra4, ormDimenzije4 } = value.detailProduct;
                    // product images slider
                    const tumbStyle = {
                        width: '100%',
                    }
                    const settings = {
                        customPaging: function (i) {
                            return (
                                <a>
                                    <img src={`${img2}${i + 1}.jpg`} style={tumbStyle} />
                                </a>
                            );
                        },
                        dots: true,
                        dotsClass: "slick-dots slick-thumb",
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    };
                    // end slider funct
                    // tabela
                    const Example = (props) => {
                        function EmptyOGname() {
                            if (ogName === 0) {
                                return { display: 'none' };
                            }
                        }
                        function EmptyVname() {
                            if (vName === 0) {
                                return { display: 'none' };
                            }
                        }
                        return (
                            <Table responsive striped className='tableDetail'>
                                <div>

                                    <thead className='ormName' >

                                        <tr>
                                            <th>Naziv proizvoda</th>
                                            <th>Sifra proizvoda</th>
                                            <th>Dimenzije</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ormName}</td>
                                            <td>{ormSifra1}</td>
                                            <td>{ormDimenzije1}</td>
                                        </tr>
                                        <tr>
                                            <td>{ormName2}</td>
                                            <td>{ormSifra2}</td>
                                            <td>{ormDimenzije2}</td>
                                        </tr>
                                        <tr>
                                            <td>{ormName3}</td>
                                            <td>{ormSifra3}</td>
                                            <td>{ormDimenzije3}</td>
                                        </tr>
                                        <tr>
                                            <td>{ormName4}</td>
                                            <td>{ormSifra4}</td>
                                            <td>{ormDimenzije4}</td>
                                        </tr>
                                    </tbody>
                                </div>
                                <div style={EmptyOGname()}>
                                    <thead className='ogName' >

                                        <tr>
                                            <th>Naziv proizvoda</th>
                                            <th>Sifra proizvoda</th>
                                            <th>Dimenzije</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{ogName}</td>
                                            <td>{ogSifra1}</td>
                                            <td>{ogDimenzije1}</td>
                                        </tr>
                                        <tr>
                                            <td>{ogName2}</td>
                                            <td>{ogSifra2}</td>
                                            <td>{ogDimenzije2}</td>
                                        </tr>
                                        <tr>
                                            <td>{ogName3}</td>
                                            <td>{ogSifra3}</td>
                                            <td>{ogDimenzije3}</td>
                                        </tr>
                                        <tr>
                                            <td>{ogName4}</td>
                                            <td>{ogSifra4}</td>
                                            <td>{ogDimenzije4}</td>
                                        </tr>
                                    </tbody>
                                </div>
                                <div style={EmptyVname()}>
                                    <thead className='vName'>
                                        <tr>
                                            <th>Naziv proizvoda</th>
                                            <th>Sifra proizvoda</th>
                                            <th>Dimenzije</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{vName}</td>
                                            <td>{vSifra}</td>
                                            <td>{vDimenzije}</td>
                                        </tr>
                                        <tr>
                                            <td>{vName2}</td>
                                            <td>{vSifra2}</td>
                                            <td>{vDimenzije2}</td>
                                        </tr>
                                    </tbody>
                                </div>
                            </Table>
                        );
                    }

                    return (
                        <div>
                            <Navigation />
                            <Container>
                                <Row>
                                    <Col md='6'>
                                        <Slider {...settings}>
                                            <div>
                                                <img src={img2 + "1.jpg"} width='100%' />
                                            </div>
                                            <div>
                                                <img src={img2 + "2.jpg"} width='100%' />
                                            </div>
                                            <div>
                                                <img src={img2 + "3.jpg"} width='100%' />
                                            </div>
                                        </Slider>
                                    </Col>
                                    <Col md='6' className='darkBc p-5'>
                                        <Row>
                                            <h4>Opis proizvoda</h4><br />
                                            <p><strong>Naziv :</strong> {name} <br />
                                                <strong>Korpus :</strong> IVERICA <br />
                                                <strong>Front :</strong> MDF bela visoki sjaj <br />
                                                <strong>Materijal:</strong> {about}<br />
                                                <strong>Prodaja po elementima .</strong><br />
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
                        </div >
                    );
                }}

            </ProductConsumer >

        )
    }
}
