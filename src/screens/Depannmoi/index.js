import React from 'react';
import PropTypes from 'prop-types';
// import $ from 'jquery';

import NavBar from '../../common/components/basics/NavBar';
import Banner from '../../common/components/Banner';
import Services from '../../common/components/Services';
import About from '../../common/components/About';
import ServicesNumber from '../../common/components/Services/Number';
import BannerFlou from '../../common/components/Banner/Flou';
import Footer from '../../common/components/basics/Footer';

import './styles.scss';

class Home extends React.Component{

  render(){
    return(
      <div>
        <NavBar />
        <Banner />
        <Services />
        <About />
        <ServicesNumber />
        <BannerFlou />
        <Footer />
      </div>
    );
  }
}

Home.contextTypes = {
  t: PropTypes.func.isRequired
}

export default Home;
