import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Telephone extends React.Component{

  render(){
    return(
      <div id="telephoneapp">
        <div className="header">
          <div className="photo"></div>
          <h1>Alexandre Pontes</h1>
          <div className="buttons">
            <span><p>message</p></span>
            <span><p>{" appel"}</p></span>
            <span><p>{" vidéo"}</p></span>
            <span><p>{' e-mail'}</p></span>
          </div>
        </div>
        <div className="inner">
          <section>
            <div className="row">
              <p>{this.context.t('portable')}</p>
              <p>{this.context.t('portable_value')}</p>
            </div>
          </section>
          <section>
            <div className="row">
              <p>{this.context.t('email_office')}</p>
              <p>{this.context.t('email_value')}</p>
            </div>
          </section>
          <section>
            <div className="row">
              <p>{this.context.t('domicile')}</p>
              <p>{this.context.t('domicile_value')}</p>
            </div>
          </section>
          <section>
            <div className="row">
              <p>{this.context.t('anniversaire')}</p>
              <p>{this.context.t('anniversaire_value')}</p>
            </div>
          </section>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

Telephone.contextTypes = {
  t : PropTypes.func.isRequired
}

export default Telephone;
