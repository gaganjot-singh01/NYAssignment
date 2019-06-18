import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Navigator from './src/navigation';

import store from './src/redux';

export default class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
