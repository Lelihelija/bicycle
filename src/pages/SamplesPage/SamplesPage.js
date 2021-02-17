import React from 'react';
import logo from '../../img/ui/logo.png';

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
              <li>name="icon-seach"</li>
            </Col>
            <Col xs="5" className="item">
              <Icon name="icon-cart"/>
              <li>name="icon-seach"</li>
            </Col>
            <Col xs="5" className="item">
              <Icon name="icon-socials"/>
              <li>name="icon-seach"</li>
            </Col>
          </Row>

          <Row className="buttons">
            <Col xs="24" className="sample-title"><h3>Bitte knopfen drucken</h3></Col>
            <Col xs="3" className="btn-wrapper item">
              <Button text="-" style="btn__xs btn__nobold btn__black" type="button"/>
              <li>style="btn__xs btn__nobold btn__black"</li>
            </Col>
            <Col xs="3" className="btn-wrapper item">
              <Button text="+" style="btn__xs btn__nobold btn__black" type="button"/>
              <li>style="btn__xs btn__nobold btn__black"</li>
            </Col>
            <Col xs="5" className="btn-wrapper item">
              <Button text="knopfen1" style="btn__s btn__black" type="button"/>
              <li>style="btn__s btn__black"</li>
            </Col>
            <Col xs="6" className="btn-wrapper item">
              <Button text="knopfen2" style="btn__md btn__white btn__bordered" type="button"/>
              <li>style="btn__md btn__white btn__bordered"</li>
            </Col>
            <Col xs="7" className="btn-wrapper item">
              <Button text="knopfen3" style="btn__lg btn__white btn__bordered" type="button"/>
              <li>style="btn__lg btn__white btn__bordered"</li>
            </Col>
            <Col xs="7" className="btn-wrapper item">
              <Button text="knopfen4" style="btn__xl btn__black" type="button"/>
              <li>style="btn__xl btn__black"</li>
            </Col>
          </Row>

          <Row className="logo">
            <Col xs="24" className="sample-title"><h3>Company logo</h3></Col>
            <div className="logo-wrapper-black"><img src={logo} alt="logo"/></div>
            <div className="logo-wrapper-white"><img src={logo} alt="logo"/></div>
          </Row>


          <Row className="typography">
            <Col xs="24" className="sample-title"><h3>Typography</h3></Col>
            <Col xs="24">
              <h1>Зручний та швидкий<br/>Твій ідеал для підкорення міста</h1>
              <li>h1</li>
            </Col>
            <Col xs="24">
              <h2>Зручний та швидкий<br/>Твій ідеал для підкорення міста</h2>
              <li>h2</li>
            </Col>
            <Col xs="24">
              <h3>Зручний та швидкий<br/>Твій ідеал для підкорення міста</h3>
              <li>h3</li>
            </Col>
            <Col xs="24">
              <p className="bold">Зручний та швидкий<br/>Твій ідеал для підкорення міста</p>
              <li>p bold</li>
            </Col>
            <Col xs="24">
              <p className="medium">Зручний та швидкий<br/>Твій ідеал для підкорення міста</p>
              <li>p medium</li>
            </Col>
            <Col xs="24">
              <p>Зручний та швидкий<br/>Твій ідеал для підкорення міста</p>
              <li>p standart</li>
            </Col>
            <Col xs="24">
              <p className="bigger">Зручний та швидкий<br/>Твій ідеал для підкорення міста</p>
              <li>p bigger</li>
            </Col>
          </Row>

        </div>
      </Container>
    </div>
  )
};

export default SamplesPage;