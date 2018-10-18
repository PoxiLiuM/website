import React from 'react';
import PropTypes from 'prop-types';

import PhoneTen from './PhoneTen';
import './styles.scss';

class PhoneTenPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      version : "0.2.2"
    }
  }

  render(){
    return(
      <div id="phonetenpage">
        <PhoneTen version={this.state.version}/>
      </div>
    );
  }
}

PhoneTenPage.contextTypes = {
  t : PropTypes.func.isRequired
}

export default PhoneTenPage;
