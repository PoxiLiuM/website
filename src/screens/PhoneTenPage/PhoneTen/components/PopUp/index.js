import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class PopUp extends React.Component{

  render(){
    return(
      <div className="popup">

      </div>
    );
  }
}

PopUp.contextTypes = {
  t : PropTypes.func.isRequired
}

export default PopUp;
