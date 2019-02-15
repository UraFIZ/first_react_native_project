/* eslint-disable react/prefer-stateless-function */
/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { createStackNavigator, AppRegistry } from 'react-navigation';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider, connect } from 'react-redux';
import { name as appName } from './app.json';
import placeReducer from './src/store/reducers/places';
import AppRouteConfigs from './App';

const AppNavigator = createStackNavigator(AppRouteConfigs);
const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  places: placeReducer,
  nav: navReducer,
});
/* const store = configureStore(); */

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);
/* const App = reduxifyNavigator(AppNavigator, "root"); */
const mainMiddleWare = compose(
  composeWithDevTools(),
  applyMiddleware(middleware),
);
const store = createStore(rootReducer, mainMiddleWare);

const Root = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
