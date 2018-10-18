import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './styles.scss';

class BottomBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      textVisible : false
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        textVisible : !this.state.textVisible
      })
    }, 3000);
  }

  render(){
    if(this.props.lockscreen){
      return(
        <div className="bottombar" onClick={() => this.props.onClickBottomBar()}>
          <p style={{opacity: this.state.textVisible ? 1 : 0, marginBottom: this.state.textVisible ? '15px' : '10px'}}>Cliquez dans cette zone pour ouvrir</p>
          <div style={{marginBottom : this.state.textVisible ? '8px' : '0px'}}></div>
        </div>
      );
    }
    return (
      <div className="bottombar" onClick={() => this.props.onClickBottomBar()} >
        <div style={{position: 'absolute', bottom: 0, marginLeft: '15px', background: _.get(this.props, 'dark', false) ? '#303030' : 'white'}}></div>
      </div>
    )
  }
}

BottomBar.contextTypes = {
  t : PropTypes.func.isRequired
}
BottomBar.propTypes = {

}

export default BottomBar;
