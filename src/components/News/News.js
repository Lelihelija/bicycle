import { React } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider from 'react-slick';

function News() {

  let settings = {
    dot: false,
    speed: 500,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div className="news">
      <Container>
        <div className="news__inner">
          <h3 className="news__title">Новости</h3>
          <Row>
            <Slider {...settings}>

            </Slider>
          </Row>
        </div>
      </Container>
    </div>
  )
};

export default News;