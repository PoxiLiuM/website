import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Settings extends React.Component{

  render(){

    const grey = "rgb(142, 142, 149)";
    const lightblue = "rgb(58, 172, 219)";
    const blue = "rgb(21, 127, 251)";
    const red = "rgb(250, 61, 58)";
    const green = "rgb(81, 215, 105)";

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
              <div style={{background: green}}></div>
              <div>
                <span>{this.context.t('operateur')}</span>
                <div>
                  <span>{this.context.t('operateur_label')}</span>
                  <span className="fleche"></span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div style={{background: red}}></div>
              <div>
                <span>{this.context.t('notifications')}</span>
                <div>
                  <span></span>
                  <span className="fleche"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{background: grey}}></div>
              <div>
                <span>{this.context.t('controle_center')}</span>
                <div>
                  <span></span>
                  <span className="fleche"></span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div style={{background: grey}}></div>
              <div>
                <span>{this.context.t('general')}</span>
                <div>
                  <span></span>
                  <span className="fleche"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{background: lightblue}}></div>
              <div>
                <span>{this.context.t('background')}</span>
                <div>
                  <span></span>
                  <span className="fleche"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{background: blue}}></div>
              <div>
                <span>{this.context.t('confidentialite')}</span>
                  <div>
                    <span></span>
                    <span className="fleche"></span>
                  </div>
              </div>
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
