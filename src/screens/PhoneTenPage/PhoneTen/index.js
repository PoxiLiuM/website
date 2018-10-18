import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import LookScreen from './containers/LookScreen';
import HomeScreen from './containers/HomeScreen';
import Application from './containers/Application';

let date = new Date();

class PhoneTen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      darkUI: false,
      appID : -1,
      showAppContent : false,
      displayOn : true,
      notificationCenter : true,
      lockScreen : true,
      overPowerButton: false,
      date : {
        minute : date.getMinutes(),
        heure : date.getHours(),
        jour : date.getDay(), // 0-6
        numJour : date.getDate(),
        mois : date.getMonth()
      }
    }
  }

  componentDidMount(){
    this.updateDate();
  }

  updateDate = () => {
    let newdate;
    setInterval(() => {
      newdate = new Date();
      if(newdate.getMinutes() > this.state.date.minute){
        // console.log("this.state.date", this.state.date);
        this.setState({
          date : {
            minute : newdate.getMinutes(),
            heure : newdate.getHours(),
            jour : newdate.getDay(), // 0-6
            numJour : newdate.getDate(),
            mois : newdate.getMonth()
          }
        })
      }
    }, 1000)
  }

  displayContent =() => {
    if(this.state.displayOn){
      return(
        <div>
          <LookScreen
            allData={this.state}
            torcheAction={() => this.setState({darkUI: !this.state.darkUI})}
            photoAction={() => console.error("This button is not working...")}
            onClickBottomBar={() => this.setState({notificationCenter: false, lockScreen: false})}
          />
          <Application
            allData={this.state}
            goToNotificationCenter={() => this.setState({notificationCenter : true, lockScreen: false})}
            closeApp={() => this.setState({appID : -1, showAppContent: false})}
          />
          <HomeScreen
            allData={this.state}
            goToNotificationCenter={() => this.setState({notificationCenter : true, lockScreen: false})}
            openApp={(id) => {
              this.setState({appID : id});
              setTimeout(() => {this.setState({showAppContent: true})}, 300);
            }}
          />

        </div>
      );
    }
    return(<div></div>);
  }

  render(){
    // console.log("this.state.appID : ", this.state.appID);
    return(
      <div id="phoneten" style={{background: this.state.darkUI ? '#404040' : '#BBB'}}>
        <div className="chassis">
          <div className="reseau"></div>
          <div className="powerbutton"
            style={{width: this.state.overPowerButton? '6px': '3px', right: this.state.overPowerButton ? '-8px' : '-5px'}}
            onMouseOver={() => this.setState({overPowerButton: true})}
            onMouseLeave={() => this.setState({overPowerButton: false})}
            onClick={() => this.setState({displayOn : !this.state.displayOn, notificationCenter : true, lockScreen : true,})}
          ></div>
          <div className="notch">
            <div className="speaker"></div>
          </div>
          <div className={this.state.displayOn ? "screen" : "screen off"}>
            {this.displayContent()}
          </div>
          <div className="reseau"></div>
        </div>
        {/*<div className="versionLabel" style={{color: this.state.darkUI ? '#BBB' : '#404040'}}>Version : {this.props.version}</div>*/}
      </div>
    );
  }
}

PhoneTen.contextTypes = {
  t : PropTypes.func.isRequired
}

export default PhoneTen;
