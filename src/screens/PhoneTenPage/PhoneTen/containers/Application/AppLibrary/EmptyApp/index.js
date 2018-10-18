import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import PopUp from '../../../../components/PopUp';

class EmptyApp extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showAlert : true
    }
  }

  render(){
    if(this.state.showAlert){
      return(
        <div id="emptyapp">
          <PopUp
            onCancel={() => this.setState({showAlert: false})}
            title={this.context.t('empty_app')}
            description={this.context.t('empty_app_description')}
            buttonLabel={this.context.t(('popup_ok'))}
          />
        </div>
      );
    }
    return(
      <div id="emptyapp"></div>
    );
  }
}

EmptyApp.contextTypes = {
  t : PropTypes.func.isRequired
}

export default EmptyApp;
