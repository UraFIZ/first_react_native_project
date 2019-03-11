/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import configureStore from './src/store/configureStore';
import App from './App';
import { name as appName } from './app.json';

const store = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 16,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
const RNRedux = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  </Provider>
);

// eslint-disable-next-line no-undef
/* if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
} */

AppRegistry.registerComponent(appName, () => RNRedux);
