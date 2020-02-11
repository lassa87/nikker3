import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import { FaFacebookSquare, FaPhoneSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail, MdLocationOn } from 'react-icons/md'

export default class Contact extends Component {
    render() {
        return (
            <div className="hero-contact">
                <Navigation />
                <div className="hero-text">
                    <h1>Kontaktirajte nas</h1>
                    <h4><MdLocationOn /> Dimitrovgradska 2, 18110 Niš <br />
                        <FaPhoneSquare /> +381 18 540 266 <br />+381 63 515 412 <br />
                        <MdEmail /> office@nikker.rs<br />
                        <a style={{ textDecoration: 'none', color: '#221d5d' }} href='https://www.facebook.com/nikker.kupatila.5'><FaFacebookSquare /> </a>
                        <a style={{ textDecoration: 'none', color: '#221d5d' }} href='https://instagram.com/nikker_kupatila?igshid=18ioo3voav209'>      <AiFillInstagram /> </a></h4>


                </div>
            </div>
        );
    }
}
