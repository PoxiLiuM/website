import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Settings extends React.Component{

  render(){

    const grey = "rgb(142, 142, 149)";
    const lightblue = "rgb(58, 172, 219)";
    const blue = "rgb(21, 127, 251)";
    const red = "rgb(250, 61, 58)";

    return(
      <div id="settings">
        <div className="header">
          <div>
            <h1>{this.context.t('settings_app_title')}</h1>
            <input type="text" name="search" placeholder={this.context.t('search')} autoComplete="off" />
          </div>
        </div>
        <div className="inner">
          <section>
            <div>
              <div></div>
              <div>
                <h1>Alexandre Pontes</h1>
                <p>{this.context.t('website_owner_mention')}</p>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div style={{background: red}}></div>
              <div>{this.context.t('notifications')}</div>
            </div>
            <div className="row">
              <div style={{background: grey}}></div>
              <div>{this.context.t('controle_center')}</div>
            </div>
          </section>
          <section>
            <div className="row">
              <div style={{background: grey}}></div>
              <div>{this.context.t('general')}</div>
            </div>
            <div className="row">
              <div style={{background: lightblue}}></div>
              <div>{this.context.t('background')}</div>
            </div>
            <div className="row">
              <div style={{background: blue}}></div>
              <div>{this.context.t('confidentialite')}</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

Settings.contextTypes = {
  t : PropTypes.func.isRequired
}

export default Settings;
