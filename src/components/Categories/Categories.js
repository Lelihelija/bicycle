import { React } from 'react';

import Slider from 'react-slick';
import {Col, Container, Row } from 'react-bootstrap';

import sliderBgrd1 from '../../img/ui/sliderBgrd1.png'
import bicycle from '../../img/ui/bicycle.png'

function Categories () {
  let settings = {
    dots: false,
    speed: 500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeight: true,
  };
  return (
    <div className="categories">
      <Container>
        <span className="categories__title">Категории</span>
      </Container>
      <div className="categories__slider">
        <Slider {...settings}>
          <div className="categories__slider-item">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
          <div className="categories__slider-item">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
          <div className="categories__slider-item">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
          <div className="categories__slider-item">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
          <div className="categories__slider-item">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
        </Slider>
      </div>
    </div>
  )
};

export default Categories;