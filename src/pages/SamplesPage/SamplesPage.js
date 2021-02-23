import React from 'react';

import logoHeader from '../../img/ui/logoHeader.png';
import logoFooter from '../../img/ui/logoFooter.png';
//bootstrap
import { Row, Col, Container } from 'react-bootstrap';

//components
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';

function SamplesPage () {

  return (
    <div className="samples-page">
      <Container>
        <div className="samples-page__inner">
          <Row className="icons">
            <Col xs="24" className="sample-title"><h3>Svg Icons</h3></Col>
            <Col xs="5" className="item">
              <Icon name="icon-seach"/>
              <span>name="icon-seach"</span>
            </Col>
            <Col xs="5" className="item">
              <Icon name="icon-cart"/>
              <span>name="icon-cart"</span>
            </Col>
            <Col xs="5" className="item">
              <Icon name="icon-socials"/>
              <span>name="icon-socials"</span>
            </Col>
          </Row>

          <Row className="buttons">
            <Col xs="24" className="sample-title"><h3>Bitte knopfen drucken</h3></Col>
            <Col xs="3" className="btn-wrapper item">
              <Button style="btn__xs btn__nobold btn__black plus" type="button"/>
              <span>style="btn__xs btn__nobold btn__black"</span>
            </Col>
            <Col xs="3" className="btn-wrapper item">
              <Button style="btn__xs btn__nobold btn__black minus" type="button"/>
              <span>style="btn__xs btn__nobold btn__black"</span>
            </Col>
            <Col xs="5" className="btn-wrapper item">
              <Button text="knopfen1" style="btn__s btn__black" type="button"/>
              <span>style="btn__s btn__black"</span>
            </Col>
            <Col xs="6" className="btn-wrapper item">
              <Button text="knopfen2" style="btn__md btn__white btn__bordered" type="button"/>
              <span>style="btn__md btn__white btn__bordered"</span>
            </Col>
            <Col xs="7" className="btn-wrapper item">
              <Button text="knopfen3" style="btn__lg btn__white btn__bordered" type="button"/>
              <span>style="btn__lg btn__white btn__bordered"</span>
            </Col>
            <Col xs="7" className="btn-wrapper item">
              <Button text="knopfen4" style="btn__xl btn__black" type="button"/>
              <span>style="btn__xl btn__black"</span>
            </Col>
          </Row>

          <Row className="logo">
            <Col xs="24" className="sample-title"><h3>Company logo</h3></Col>
            <div className="logo-wrapper-black"><img src={logoHeader} alt="logo"/></div>
            <div className="logo-wrapper-white"><img src={logoHeader} alt="logo"/></div>
            <div className="logo-wrapper-black"><img src={logoFooter} alt="logo"/></div>
            <div className="logo-wrapper-white"><img src={logoFooter} alt="logo"/></div>
          </Row>


          <Row className="typography">
            <Col xs="24" className="sample-title"><h3>Typography</h3></Col>
            <Col xs="24">
              <h1>Зручний та швидкий<br/>Твій ідеал для підкорення міста</h1>
              <span>h1</span>
            </Col>
            <Col xs="24">
              <h2>Зручний та швидкий<br/>Твій ідеал для підкорення міста</h2>
              <span>h2</span>
            </Col>
            <Col xs="24">
              <h3>Зручний та швидкий<br/>Твій ідеал для підкорення міста</h3>
              <span>h3</span>
            </Col>
            <Col xs="24">
              <p className="bold">Зручний та швидкий<br/>Твій ідеал для підкорення міста</p>
              <span>p bold</span>
            </Col>
            <Col xs="24">
              <p className="medium">Зручний та швидкий<br/>Твій ідеал для підкорення міста</p>
              <span>p medium</span>
            </Col>
            <Col xs="24">
              <p>Зручний та швидкий<br/>Твій ідеал для підкорення міста</p>
              <span>p standart</span>
            </Col>
            <Col xs="24">
              <p className="bigger">Зручний та швидкий<br/>Твій ідеал для підкорення міста</p>
              <span>p bigger</span>
            </Col>
          </Row>

        </div>
      </Container>
    </div>
  )
};

export default SamplesPage;