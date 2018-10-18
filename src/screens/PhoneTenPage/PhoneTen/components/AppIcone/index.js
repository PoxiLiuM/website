import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './styles.scss';

class AppIcone extends React.Component{

  selectClassName = () => {
    let cn = "appicone ";
    switch (this.props.color) {
      case "blue" :
        cn += "bg-blue";
        break;
      case "green" :
        cn += "bg-green";
        break;
      case "black" :
        cn += "bg-black";
        break;
      case "grey" :
        cn += "bg-grey";
        break;
      case "orange" :
        cn += "bg-orange";
        break;
      case "red" :
        cn += "bg-red";
        break;
      case "white" :
      default :
        cn += "bg-white";
        break;
    }
    return cn;
  }

  render(){
    return(
      <div onClick={() => this.props.openApp()}>
        <div className={this.selectClassName()}>
          <div>{_.get(this.props, 'label', '')}</div>
        </div>
      </div>
    )
  }
}

AppIcone.propTypes = {
  label : PropTypes.string,
  color : PropTypes.string
}

export default AppIcone;
