import React from 'react';
import { Nav, NavItem, Row, Col } from 'reactstrap'
import Logo from '../resources-nikker/logo-bez-pozadine.png'
import { Link } from 'react-router-dom'
const linkColor = {
    color: ' #221d5d',
    fontFamily: 'Impact',
    marginLeft: '1.5rem',
}
const Navigation = (props) => {
    return (
        <div>
            <Row>
                <Col xs='4' md='3' lg='2'>
                    <Link to="/">
                        <img src={Logo} alt="nikker" width="100%"></img>
                    </Link>
                </Col>
                <Col>
                    <Nav className="justify-content-center pt-3">
                        <Link to="/">
                            <NavItem>
                                <span style={linkColor}>Početna</span>
                            </NavItem>
                        </Link>
                        <Link to="/Products">
                            <NavItem>
                                <span style={linkColor}>Proizvodi</span>
                            </NavItem>
                        </Link>
                        <Link to="/Contact">
                            <NavItem>
                                <span style={linkColor}>Kontakt</span>
                            </NavItem>
                        </Link>
                    </Nav>
                </Col>
            </Row>
            <hr />
        </div>
    );
}

export default Navigation;