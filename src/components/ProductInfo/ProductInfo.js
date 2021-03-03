import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';

function ProductInfo() {
  return (
    <div className="productinfo">
      <Container>
        <div className="productinfo__inner">
          <h3 className="productinfo__title">Велосипеды Streetster это...</h3>
          <Row>
            <Col xs="8">
              //Зробити однакові коли з сірим тоном, картинка абзолютом вилазить. Марджін тайтла це враховує
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
};

export default ProductInfo;