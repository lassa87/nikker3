import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navigation from '../components/Navigation'
import a1 from '../resources-nikker/FireShot Capture 035 - Nikker - localhost.png'
import a2 from '../resources-nikker/FireShot Capture 036 - Nikker - localhost.png'
import Product from '../components/Product'
import { ProductConsumer } from '../components/ProductProvider'
import Slider from "react-slick";




export default class Proba extends Component {
    render() {
        const tumbStyle = {
            width: '100%',
        }
        const baseUrl = './images/1';
        const settings = {
            customPaging: function (i) {
                return (
                    <a>
                        <img src={`${baseUrl}${i + 1}.jpg`} style={tumbStyle} />
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
        return (
            <div >
                <Navigation />
                <div fluid style={{ backgroundColor: '#5d589b' }}>
                    <Container>
                        <Row >
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(
                                        product => {
                                            if (product.group === 'vertikale') {
                                                return <Product key={product.id} product={product} />;
                                            }
                                        }
                                    )
                                }

                                }
                            </ProductConsumer>
                        </Row>
                    </Container>
                    <br /><br />
                    <h1>DETEALJI PROIZVODA - PROBA SA POZADINOM</h1>
                    <br />
                    <img src={a1} width='80%' />
                    <br />
                    <img src={a2} width='80%' />
                </div>


                {/* -----------------------   slider   ---------------------------- */}
                {/* -----------------------   slider   ---------------------------- */}


                <div>
                    <h2>Custom Paging</h2>
                    <Slider {...settings}>
                        <div>
                            <img src={baseUrl + "1.jpg"} />
                        </div>
                        <div>
                            <img src={baseUrl + "2.jpg"} />
                        </div>
                        <div>
                            <img src={baseUrl + "3.jpg"} />
                        </div>
                    </Slider>
                </div>
    );
            </div >
        );

    }
}
