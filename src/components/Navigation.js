import React, { useState } from 'react';
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavItem, Row, Col } from 'reactstrap'
import Logo from '../resources-nikker/logo-bez-pozadine.png'
import { Link } from 'react-router-dom'
const linkColor = {
    color: ' #221d5d',
    fontFamily: 'Arial',
    marginLeft: '1.5rem',
    fontWeight: '700'
}
const Navigation = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
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
                                Početna
                            </NavItem>
                        </Link>
                        <NavItem>
                            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle nav caret>
                                    Proizvodi
                                    </DropdownToggle>
                                <DropdownMenu>
                                    <Link to="/Products">
                                        <DropdownItem Header>Proizvodi</DropdownItem>
                                    </Link>
                                    <Link to="/Vertikale">
                                        <DropdownItem>Vertikale</DropdownItem>
                                    </Link>
                                    <Link to="/Ormarici">
                                        <DropdownItem>Donji delovi</DropdownItem>
                                    </Link>
                                    <Link to="/Ogledala">
                                        <DropdownItem>Ogledala</DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <Link to="/Contact">
                            <NavItem>
                                Kontakt
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