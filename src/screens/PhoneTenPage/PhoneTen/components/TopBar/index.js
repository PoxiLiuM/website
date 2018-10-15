import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './styles.scss';

class TopBar extends React.Component{


  getHours = (date) => {
    return date.heure + ":" + (date.minute < 10 ? "0" + date.minute : date.minute);
  }

  render(){
    return(
      <div className={_.get(this.props, 'isWhite', true) ? "top-bar" : "top-bar black"}>
        <span onClick={() => this.props.goToNC()}>
          {this.props.notificationCenter ? 'ASP' : this.getHours(this.props.date)}
        </span>
        <span></span>
      </div>
    );
  }
}

TopBar.contextTypes = {
  t : PropTypes.func.isRequired
}
TopBar.propTypes = {
  isWhite : PropTypes.bool,
  isNC : PropTypes.bool,
  date : PropTypes.object.isRequired
}

export default TopBar;
