import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import MainPage from '../containers/MainPageContainer';
import SettingsPage from './SettingsPage';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator({
    Main: {
        screen: MainPage,
        navigationOptions: {
            title: 'Home',
        },
    },
    Settings: {
        screen: SettingsPage,
        navigationOptions: {
            title: 'Settings',
        },
    },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({state: state.nav});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };