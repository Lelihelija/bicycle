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
    arrow: true, //not working
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };
  return (
    <div className="categories">
      <Container>
        <span className="categories__title">Категории</span>
      </Container>
      <Row className="categories__slider">
        <Slider {...settings}>
          <div className="categories__slider-item" xs="20">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
          <div className="categories__slider-item" xs="20">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
          <div className="categories__slider-item" xs="20">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
          <div className="categories__slider-item" xs="20">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
          <div className="categories__slider-item" xs="20">
            <img className="categories__slider-bgrd" src={sliderBgrd1} alt="test"/>
            <img className="categories__slider-product" src={bicycle} alt="bike"/>
            <span className="categories__slider-text">ROAD SERIES</span>
          </div>
        </Slider>
      </Row>
    </div>
  )
};

export default Categories;