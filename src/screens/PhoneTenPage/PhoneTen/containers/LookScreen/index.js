import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../../components/TopBar';
import DateNow from '../../components/DateNow';
import NotificationArea from '../../components/NotificationArea';
import NCTwoButtons from '../../components/NCTwoButtons';
import BottomBar from '../../components/BottomBar';

import './styles.scss';

class LookScreen extends React.Component{

  render(){
    return(
      <div style={{top: this.props.allData.notificationCenter ? '0' : '-100%'}} className="lookscreen">
        <TopBar date={this.props.allData.date} notificationCenter={this.props.allData.notificationCenter}/>
        <DateNow date={this.props.allData.date}/>
        <NotificationArea isLockScreen={this.props.allData.lockScreen} />
        <NCTwoButtons
          left={() => this.props.torcheAction()}
          right={() => {
            this.props.photoAction();
          }}/>
        <BottomBar lockscreen={this.props.allData.lockScreen} onClickBottomBar={this.props.onClickBottomBar}/>
      </div>
    )
  }
}

LookScreen.propTypes = {
  allData : PropTypes.object.isRequired
}

export default LookScreen;
