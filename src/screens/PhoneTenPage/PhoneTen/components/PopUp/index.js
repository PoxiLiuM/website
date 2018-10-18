import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class PopUp extends React.Component{

  render(){
    return(
      <div className="popup">
        <div className="inner">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <div onClick={() => this.props.onCancel()}>
            <span>{this.props.buttonLabel}</span>
          </div>
        </div>
      </div>
    );
  }
}

PopUp.contextTypes = {
  t : PropTypes.func.isRequired
}
PopUp.propTypes = {
  title : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  buttonLabel : PropTypes.string.isRequired,
  onCancel : PropTypes.func.isRequired
}

export default PopUp;
