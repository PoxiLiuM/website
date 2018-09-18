import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import appReducer from './common/reducers/first';
import Screens from './screens';

const store = createStore(appReducer);
// store.dispatch({type: "TYPEACTION", payload: {data: data}})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}

export default App;
