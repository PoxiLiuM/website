import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import LookScreen from './containers/LookScreen';
import HomeScreen from './containers/HomeScreen';

let date = new Date();

class PhoneTen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      darkUI: false,
      displayOn : true,
      appID : -1,
      notificationCenter : true,
      lockScreen : true,
      date : {
        minute : date.getMinutes(),
        heure : date.getHours(),
        jour : date.getDay(), // 0-6
        numJour : date.getDate(),
        mois : date.getMonth()
      }
    }
  }

  componentWillReceiveProps(nextProps){
    // this.updateDate();
  }

  updateDate = () => {
    let newdate;
    setInterval(() => {
      newdate = new Date();
      if(newdate.getMinutes() > this.state.date.minute){
        console.log("this.state.date", this.state.date);
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
    this.updateDate();
    if(this.state.displayOn){
      return(
        <div>
          <LookScreen
            allData={this.state}
            torcheAction={() => this.setState({darkUI: !this.state.darkUI})}
            photoAction={() => console.log("PHOTO")}
            onClickBottomBar={() => this.setState({notificationCenter: false, lockScreen: false})}
          />
          <HomeScreen
            allData={this.state}
            goToNotificationCenter={() => this.setState({notificationCenter : true})}
          />
        </div>
      );
    }
    return(<div></div>);
  }

  render(){
    return(
      <div id="phoneten" style={{background: this.state.darkUI ? '#404040' : '#BBB'}}>
        <div className="chassis">
          <div className="reseau"></div>
          <div className="notch">
            <div className="speaker"></div>
          </div>
          <div className={this.state.displayOn ? "screen" : "screen off"}>
            {this.displayContent()}
          </div>
          <div className="reseau"></div>
        </div>
      </div>
    );
  }
}

PhoneTen.contextTypes = {
  t : PropTypes.func.isRequired
}

export default PhoneTen;
