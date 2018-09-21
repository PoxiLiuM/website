import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../../common/components/basics/NavBar';
import Banner from '../../common/components/Banner';

import './styles.scss';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <NavBar />
        <Banner />
      </div>
    );
  }
}

Home.contextTypes = {
  t: PropTypes.func.isRequired
}

export default Home;
