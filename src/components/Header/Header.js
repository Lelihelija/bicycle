import { React, useState } from "react";

import { Col, Row, Container } from 'react-bootstrap';

import logoHeader from '../../img/ui/logoHeader.png';
import Icon from '../Icon/Icon';

function Header() {
    const [menuIsActive, setToggleMenu] = useState(false);

    const toggleMenu = () => {setToggleMenu(!menuIsActive)};

    return (
        <header className="header">
            <Container className="custom-container">
                <Row className="header-inner">
                    <Col className="header__logo" xs="24" md="8">
                        <a href="#"><img src={logoHeader} alt="logo"/></a>
                    </Col>
                    <Col className="header__search"xs="16" md="8">
                        <label className="header__search-label">
                            <Icon name="icon-seach"/>
                            <input type="text"/>
                        </label>
                    </Col>
                    <Col className="header__cart-menu" xs="8">
                        <button type="button" className="cart-btn"><Icon name="icon-cart"/></button>
                        <button type="button" className={menuIsActive ? 'menu-btn active' : 'menu-btn'} onClick={toggleMenu}><span className="menu-span"></span></button>
                    </Col>
                </Row>
            </Container>
        </header>
    )
};

export default Header;