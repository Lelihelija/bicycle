import React from 'react';

//components
import TopBanner from '../../components/TopBanner/TopBanner';
import Bgrd from '../../components/Bgrd/Bgrd';
import CompanyInfo from '../../components/CompanyInfo/CompanyInfo';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import News from '../../components/News/News';
import Subscription from '../../components/Subscription/Subscription';

function MainPage () {

  return(
    <div className="main-page">
      <TopBanner/>
        <Bgrd/>
        <CompanyInfo/>
        <ProductInfo/> {/* has svg bgrd */}
        <News/>
        <Subscription/>
    </div>
  )
};

export default MainPage;