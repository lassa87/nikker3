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
                    <h4> <FaPhoneSquare /> telefon <br />
                        <MdLocationOn /> adresa <br />
                        <MdEmail /> mail<br />
                        <a style={{ textDecoration: 'none', color: '#221d5d' }} href='https://www.facebook.com/nikker.kupatila.5'><FaFacebookSquare /> Facebook</a> <br />
                        <a style={{ textDecoration: 'none', color: '#221d5d' }} href='https://www.facebook.com/nikker.kupatila.5'><AiFillInstagram /> Instagram</a></h4>


                </div>
            </div>
        );
    }
}
