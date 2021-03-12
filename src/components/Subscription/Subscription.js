import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ufobgrd from '../../img/ui/bg.png';

function Subscription () {
  return (
    <div className="subscription">
      <Container>
        <div className="subscription__inner">
          <div className="subscription__wrapper">
            <div className="subscription__title-wrapper">
              <span className="subscription__title">Подпишитесь на новостную рассылку</span>
            </div>
            <div className="subscription__input-wrapper">
              <input type="email" placeholder="Email" className="subscription__input"/>
            </div>
            <button className="subscription__btn btn_ btn__black btn__md">ПОДПИСАТЬСЯ</button>
          </div>
          <img src={ufobgrd} alt="ufo" className="subscription__bgrd"/>
        </div>
      </Container>
    </div>
  )
};

export default Subscription;