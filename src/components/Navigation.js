import React, { useState } from 'react';
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavItem, Row, Col, NavLink } from 'reactstrap'
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
                                <NavLink>
                                    <span className="nav-custom">
                                        Početna
                                    </span>

                                </NavLink>
                            </NavItem>
                        </Link>
                        <NavItem>
                            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle nav caret>
                                    <span className="nav-custom">
                                        Proizvodi
                                    </span>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Link to="/Products">
                                        <DropdownItem Header className="nav-custom">Proizvodi</DropdownItem>
                                    </Link>
                                    <Link to="/Vertikale">
                                        <DropdownItem className="nav-custom">Vertikale</DropdownItem>
                                    </Link>
                                    <Link to="/Ormarici">
                                        <DropdownItem className="nav-custom">Donji delovi</DropdownItem>
                                    </Link>
                                    <Link to="/Ogledala">
                                        <DropdownItem className="nav-custom">Ogledala</DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <Link to="/Contact">
                            <NavItem>
                                <NavLink>
                                    <span className="nav-custom">
                                        Kontakt
                                    </span>
                                </NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/Onama">
                            <NavItem>
                                <NavLink>
                                    <span className="nav-custom">
                                        O nama
                                    </span>
                                </NavLink>
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