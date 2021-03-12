import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider from 'react-slick';

//images for slider//
import newsSlide1Img from '../../img/content/newsSlide1Img.png';
import newsSlide2Img from '../../img/content/newsSlide2Img.png';
import newsSlide3Img from '../../img/content/newsSlide3Img.png';

function News() {

  let sliderInfo = [
    {
      img: newsSlide1Img,
      title: 'Лучшие аксессуары для стрит байков',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      img: newsSlide2Img,
      title: 'Куда поехать в Киеве?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      img: newsSlide3Img,
      title: 'Как обслуживать свой велосипед?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      img: newsSlide3Img,
      title: 'Как обслуживать свой велосипед?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      img: newsSlide3Img,
      title: 'Как обслуживать свой велосипед?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      img: newsSlide3Img,
      title: 'Как обслуживать свой велосипед?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
  ];

  let settings = {
    dot: false,
    speed: 500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  }
  return (
    <div className="news">
      <Container>
        <div className="news__inner">
          <h3 className="news__title">Новости</h3>
          <div className="news__slider-wrapper">
            <Slider {...settings}>
              { sliderInfo.map((elem, index) =>
                <div className="news__slide" key={index}>
                  <div className="news__slide-inner">
                    <div className="news__slide-img">
                      <img src={elem.img} alt="slide"/>
                    </div>
                    <div className="news__slide-info-wrapper">
                      <div className="news__slide-title-wrapper">
                        <span className="news__slide-title">{elem.title}</span>
                      </div>
                      <div className="news__slide-description-wrapper">
                        <p className="news__slide-description">{elem.description}</p>
                      </div>
                    </div>
                    <a className="news__slide-btn btn__white btn__bordered btn__max btn_" href="#">ЧИТАТЬ</a>
                  </div>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default News;