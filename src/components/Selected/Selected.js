import { React } from "react";
import {Container} from 'react-bootstrap';

import bike from '../../img/ui/bicycle-selected.png';
import helmet from '../../img/ui/helmet.png';
import assSaver from '../../img/ui/asssaver.png';



function Selected() {
  return (
    <div className="selected">
      <Container>
        <div className="selected__inner"><span className="selected__title">Избранные товары</span>
          <div className="selected__grid-wrapper">
            <div className="selected-item__main">
              <h3 className="selected-item__main-title">STREETSTER BAKERSTREET</h3>
              <span className="selected-item__main-description">скорость соедененная с удобством</span>
              <img src={bike} alt="bike" className="selected-item__main-img"/>
              <div className="selected-item__main-button-wrapper">
                <button className="selected-item__main-btn"><span></span></button>
              </div>
            </div>
            <div className="selected-item__secondary">
              <img src={helmet} alt="helmet"/>
              <span className="selected-item__secondary-info">Шлем Octane</span>
            </div>
            <div className="selected-item__secondary">
              <img src={assSaver} alt="saver"/>
              <span className="selected-item__secondary-info">Защита Canyon</span>
            </div>
            <div className="selected-item__secondary">
              <img src={helmet} alt="helmet"/>
              <span className="selected-item__secondary-info">Шлем Octane</span>
            </div>
            <div className="selected-item__secondary">
              <img src={assSaver} alt="saver"/>
              <span className="selected-item__secondary-info">Защита Canyon</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default Selected;