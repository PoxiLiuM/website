import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Settings extends React.Component{

  render(){
    return(
      <div id="settings">
        <div className="header">
          <div>
            <h1>{this.context.t('settings_app_title')}</h1>
            <input type="text" name="search" placeholder={this.context.t('search')} autoComplete="off" />
          </div>
        </div>
      </div>
    );
  }
}

Settings.contextTypes = {
  t : PropTypes.func.isRequired
}

export default Settings;
