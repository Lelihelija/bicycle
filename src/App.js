import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
// import Icon from './components/Icon/Icon';
import Icons from './components/Icons/Icons';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//styles
import './App.scss';

//imported data
import {pagesData} from './data/websitedata';

function App() {
  console.log(pagesData);

  return (
    <Router basename="/bicycle">
      <Icons/>
      <div className="page-wrapper">
        <Header/>
        {/* <Switch> */}
          <main className="content-wrapper">
            {
              pagesData.map((elem, index) => {
                <Route {...elem} key={index}/>
              })
            }

            {/* <SamplesPage/> */}

            {/* MainPage */}
              {/* <TopBanner/> */}
              {/* <Categories/> */}
              {/* <SelectedGoods/> */}
              {/* <AboutCompany/> */}
              {/* <AboutGoods/> */}
              {/* <News/> */}
              {/* <Subscription/> */}

            {/* CategoryPage */}
              {/* <TopBanner/> */}
              {/* <GoodsCard/> */}
              {/* <ProductsSlider/> */}

            {/* ProductPage */}
              {/* <ProductsSlider/> */}
              {/* <ProductInfo/> */}
              {/* ProductDetailedInfo */}
              {/* ProductReviews */}
              {/* <CategoryPage/> - На сторінці категорії, отримати інфу у списку, тобто об'єкті*/}

            {/* CartCheckoutPage */}
              {/* ProductsForCheckout */}
              {/* ClientInfo */}

            {/* NewsPage */}
              {/* <Article/> */}

            {/* ArticlePage */}
              {/* FullArticle and banner */}

            {/* CompanyInfoPage */}
              {/* <AboutCompany/> */}
              {/* <AboutGoods/> */}
              {/* <Contacts/> */}

            {/* AboutUsPage */}
              {/* <AboutCompany/> */}
              {/* <AboutGoods/> */}

            {/* ContactsPage */}
              {/* <Contacts/> */}

            {/* SamplesPage */}
            {/* All icons, buttons and so on */}

            {/* 404page */}

          </main>
        {/* </Switch> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
