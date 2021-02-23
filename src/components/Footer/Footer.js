import { React } from "react";

import { Row, Col, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import logoFooter from '../../img/ui/logoFooter.png';
import { footerData } from '../../data/websitedata';
import Icon from '../Icon/Icon';

function Footer () {

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-inner">
          <Col xs="12" xl="6" className="footer__logo">
            <a href="#"><img src={logoFooter} alt="logo"/></a>
          </Col>
          {footerData.map ((item, index) =>
            <Col xs="24" sm="12" md="6" xl="4" key={index} className="footer__menu">
              <span className="footer__menu-title">{item.title}</span>
              <ul>
                {item.item.map((subItem, index) =>
                  <li className="footer__menu-item" key={index}><NavLink to={subItem.to}>{subItem.name}</NavLink></li>
                )}
              </ul>
            </Col>
          )}
          <Col xs="24" sm="12" xl="2" className="footer__socials">
            <ul>
              <li><a href="#"><Icon name="icon-instagram"/></a></li>
              <li><a href="#"><Icon name="icon-facebook"/></a></li>
            </ul>
          </Col>
          <Col xs="24" className="footer__copyright">© STREETSTER — Всі права захищені</Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;