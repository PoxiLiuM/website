import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../../components/TopBar';
import Dock from '../../components/Dock';

import './styles.scss';

class HomeScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.allData;
  }

  render(){
    return(
      <div className="homescreen">
        <TopBar date={this.props.allData.date} isNC={false} goToNC={this.props.goToNotificationCenter}/>
        <Dock />
      </div>
    )
  }
}

HomeScreen.propTypes = {
  allData : PropTypes.object.isRequired
}

export default HomeScreen;
