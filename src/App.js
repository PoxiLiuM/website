import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import I18n from "redux-i18n";
import {i18nState} from "redux-i18n";

import appReducer from './common/reducers/first';
import Screens from './screens';

import {translations} from "./common/translations";

const allReducers = combineReducers({appReducer, i18nState});

const store = createStore(allReducers);
// store.dispatch({type: "TYPEACTION", payload: {data: data}})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <I18n translations={translations} initialLang="fr" fallbackLang="en">
          <Screens />
        </I18n>
      </Provider>
    );
  }
}

export default App;
