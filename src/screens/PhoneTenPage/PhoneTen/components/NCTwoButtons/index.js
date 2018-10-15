import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class NCTwoButtons extends React.Component{

  render(){
    return(
      <div className="nctwobuttons">
        <div onClick={() => this.props.left()}><span className="lampe"></span></div>
        <div onClick={() => this.props.right()}><span className="photo"></span></div>
      </div>
    );
  }
}

NCTwoButtons.contextTypes = {
  t : PropTypes.func.isRequired
}
NCTwoButtons.propTypes = {
  left : PropTypes.func.isRequired,
  right : PropTypes.func.isRequired
}

export default NCTwoButtons;
