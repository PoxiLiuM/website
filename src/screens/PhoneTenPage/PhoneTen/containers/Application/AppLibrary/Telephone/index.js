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
        <div className="inner"></div>
        <div className="footer"></div>
      </div>
    );
  }
}

Telephone.contextTypes = {
  t : PropTypes.func.isRequired
}

export default Telephone;
