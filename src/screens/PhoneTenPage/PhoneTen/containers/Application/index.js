import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'

import './styles.scss';

import BottomBar from '../../components/BottomBar';
import TopBar from '../../components/TopBar';

import Telephone from './AppLibrary/Telephone';

class Application extends React.Component{

  applicationContent = (appID) => {
    switch (appID) {
      case 1:
        return <Telephone />
      case 0:
      default:
        console.error("This application is undefined...");
        return (<div></div>)
    }
  }

  render(){
    let { allData } = this.props;
    let customStyle = {
      height: allData.appID === -1 ? 0 : '100%',
      width: allData.appID === -1 ? 0 : '100%',
      marginLeft: allData.appID === -1 ? '50%' : 0,
      marginTop : allData.appID === -1 ? '50%' : 0
    }
    if(_.get(allData, 'showAppContent', false)){
      return(
        <div className="application" style={customStyle}>
          <TopBar date={allData.date} isNC={false} goToNC={this.props.goToNotificationCenter} dark/>
          {this.applicationContent(allData.appID)}
          <BottomBar onClickBottomBar={() => this.props.closeApp()} dark/>
        </div>
      )
    }
    return(
      <div className="application" style={customStyle}></div>
    )

  }
}

Application.propTypes = {
  allData : PropTypes.object.isRequired
}

export default Application;
