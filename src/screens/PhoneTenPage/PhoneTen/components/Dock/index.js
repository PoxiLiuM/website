import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import AppIcone from '../AppIcone';

class Dock extends React.Component{

  render(){
    return(
      <div className="dock">
        <AppIcone color="green" openApp={() => this.props.openApp(1) }/>
        <AppIcone color="blue" openApp={() => this.props.openApp(0)}/>
        <AppIcone color="white" openApp={() => this.props.openApp(0)}/>
        <AppIcone color="red" openApp={() => this.props.openApp(0)}/>
      </div>
    )
  }
}

Dock.propTypes = {
  openApp : PropTypes.func.isRequired
}

export default Dock;
