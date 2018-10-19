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
      <div className={_.get(this.props, 'dark', false) ? "top-bar black" : "top-bar"}>
        <span
          onClick={() => !this.props.notificationCenter ? this.props.goToNC() : ''}
          style={{cursor: !this.props.notificationCenter ? 'pointer' : 'initial', fontSize: !this.props.notificationCenter? '11px': '10px'}}
        >
          {this.props.notificationCenter ? this.context.t('operateur_label') : this.getHours(this.props.date)}
        </span>
        {_.get(this.props, 'hideBatterie', false) ? '' : <span></span>}
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
