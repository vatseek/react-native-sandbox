import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/components/AppNavigator';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, middleware];

const store = createStore(AppReducer, composeEnhancers(applyMiddleware(...middlewares)));

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