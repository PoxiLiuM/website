import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Mail extends React.Component{

  render(){
    return(
      <div id="mailapp">

        <div className="footer">
          <div></div>
          <p>{this.context.t('updated_at_the_moment')}</p>
        </div>
      </div>
    );
  }
}

Mail.contextTypes = {
  t : PropTypes.func.isRequired
}

export default Mail;
