import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './styles.scss';

class Photo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      press: false
    }
  }

  render(){
    let animatedStyle = {left: _.get(this.props, 'showLockScreenCamera', false) ? 0 : '100%'}
    let animatedButton = {border : this.state.press ? '3px solid black' : '1px solid black'}
    return(
      <div id="photo" style={animatedStyle}>
        <div className="header"></div>
        <div className="main">
          {this.context.t('camera_disabled')}
        </div>
        <div className="footer">
          <span>{this.context.t('photo')}</span>
          <div
            onMouseDown={() => this.setState({press: true})}
            onMouseUp={() => this.setState({press: false})}
          ><div style={animatedButton}></div></div>
        </div>
      </div>
    );
  }
}

Photo.contextTypes = {
  t : PropTypes.func.isRequired
}
Photo.propTypes = {
  showLockScreenCamera : PropTypes.bool
}

export default Photo;
