import { React } from 'react';

import Slider from 'react-slick';
import {Col, Container, Row } from 'react-bootstrap';

import sliderBgrd1 from '../../img/ui/sliderBgrd1.png'
import exampleBG from '../../img/content/road.jpg'
import bicycle from '../../img/ui/bicycle.png'

function Categories () {
  let settings = {
    dots: false,
    speed: 500,
    infinite: true,
    initialSlide: 1,
    swipeToSlide: true,
    slidesToShow: 3,
    centerMode: true,
    className: "center",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1349,
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
      <div className="categories__slider">
        <Slider {...settings}>
          <div className="categories__slider slide">
            <div className="slide__inner">
              <div className="slide__bgrd">
                <img src={exampleBG} alt="bgrd"/>
              </div>
              <div className="slide__img">
                <img src={bicycle} alt="bike"/>
              </div>
              <div className="slide__title">
                <span>ROAD SERIES 1</span>
              </div>
            </div>
          </div>
          <div className="categories__slider slide">
            <div className="slide__inner">
              <div className="slide__bgrd">
                <img src={exampleBG} alt="bgrd"/>
              </div>
              <div className="slide__img">
                <img src={bicycle} alt="bike"/>
              </div>
              <div className="slide__title">
                <span>ROAD SERIES 2</span>
              </div>
            </div>
          </div>
          <div className="categories__slider slide">
            <div className="slide__inner">
              <div className="slide__bgrd">
                <img src={exampleBG} alt="bgrd"/>
              </div>
              <div className="slide__img">
                <img src={bicycle} alt="bike"/>
              </div>
              <div className="slide__title">
                <span>ROAD SERIES 3</span>
              </div>
            </div>
          </div>
          <div className="categories__slider slide">
            <div className="slide__inner">
              <div className="slide__bgrd">
                <img src={exampleBG} alt="bgrd"/>
              </div>
              <div className="slide__img">
                <img src={bicycle} alt="bike"/>
              </div>
              <div className="slide__title">
                <span>ROAD SERIES 4</span>
              </div>
            </div>
          </div>
          <div className="categories__slider slide">
            <div className="slide__inner">
              <div className="slide__bgrd">
                <img src={exampleBG} alt="bgrd"/>
              </div>
              <div className="slide__img">
                <img src={bicycle} alt="bike"/>
              </div>
              <div className="slide__title">
                <span>ROAD SERIES 5</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
};

export default Categories;