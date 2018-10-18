import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class NotificationArea extends React.Component{


  render(){
    return(
      <div className="notificationarea">
        {!this.props.isLockScreen ? <p>{this.context.t('no_old_notification')}</p> : ''}
      </div>
    )
  }
}

NotificationArea.propTypes = {
  isLockScreen : PropTypes.bool.isRequired
}
NotificationArea.contextTypes = {
  t : PropTypes.func
}

export default NotificationArea;
