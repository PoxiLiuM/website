import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Depannmoi from './Depannmoi';
import TestBackend from './TestBackend';
import PhoneTenPage from './PhoneTenPage';
import './general.scss';

class Screens extends React.Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/depannmoi" component={Depannmoi} />
          <Route exact path="/testbackend" component={TestBackend} />
          <Route exact path="/" component={PhoneTenPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Screens;
