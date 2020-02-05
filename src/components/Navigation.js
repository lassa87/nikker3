import React from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import Logo from '../resources-nikker/logo-bez-pozadine.png'
import { Link } from 'react-router-dom'
const linkColor = {
    color: ' #221d5d',
    fontFamily: 'Impact',
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
                                <NavLink style={linkColor}>Početna</NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/Products">
                            <NavItem>
                                <NavLink style={linkColor}>Proizvodi</NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/Contact">
                            <NavItem>
                                <NavLink style={linkColor}>Kontakt</NavLink>
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