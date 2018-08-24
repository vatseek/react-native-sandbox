import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/components/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware));

class RootApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RootApp', () => RootApp);

export default RootApp;