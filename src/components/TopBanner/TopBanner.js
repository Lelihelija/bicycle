import { React } from 'react';
import { Container } from 'react-bootstrap';

// import topBannerBackground.png

function TopBanner () {
  return (
    <div className="topbanner">
      <Container>
        <div className="topbanner-inner">
          <span className="topbanner__subtitle">STREETSTER NATHAN</span>
          <span className="topbanner__title">Зручний та швидкий<br/>Твій ідеал для підкорення міста</span>
          {/* <span className="topbanner__title">Удобный и быстрый<br/>Твой идеал для покорения города</span> */}
          <a href="#" className="btn_ btn__s btn__black">ДІЗНАТИСЯ БІЛЬШЕ</a>
        </div>
      </Container>
    </div>
  )
};

export default TopBanner;