import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';

import support from '../../img/ui/support.png';
import chain from '../../img/ui/chain.png';
import frame from '../../img/ui/frame.png';

function ProductInfo() {
  return (
    <div className="productinfo">
      <Container>
        <div className="productinfo__inner">
          <h3 className="productinfo__title">Велосипеды Streetster это...</h3>
          <Row className="productinfo__info-row">
            <Col xs="18" lg="7" className="productinfo__info-wrapper">
              <img src={support} alt="detail" className="productinfo__info-img"/>
              <span className="productinfo__info-title">Простота обслуживания</span>
              <p className="productinfo__info-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Col>
            <Col xs="18" lg="7" className="productinfo__info-wrapper">
              <img src={frame} alt="detail" className="productinfo__info-img"/>
              <span className="productinfo__info-title">Надежная конструкция</span>
              <p className="productinfo__info-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Col>
            <Col xs="18" lg="7" className="productinfo__info-wrapper">
              <img src={chain} alt="detail" className="productinfo__info-img"/>
              <span className="productinfo__info-title">Качественные детали</span>
              <p className="productinfo__info-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
};

export default ProductInfo;