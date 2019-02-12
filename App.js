/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { View, Text } from 'react-native';
import AuthScreen from './src/screen/Auth/Auth';
import FindPlaceScreen from './src/screen/FindPlace/FindPlace';
import SharePlaceScreen from './src/screen/SharePlace/SharePlace';

const CentredText = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 18, color: 'white' }}>Auth</Text>
  </View>
);
const findStack = createStackNavigator({ FindPlaceScreen });
const shartStack = createStackNavigator({ SharePlaceScreen });
const authNav = createStackNavigator({ AuthScreen });
authNav.navigationOptions = () => ({
  title: 'Auth',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const Nav = createBottomTabNavigator(
  {
    find: findStack,
    share: shartStack,
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    },
  },
);

const Swetch = createSwitchNavigator(
  {
    authNav,
    Nav,
  },
  {
    initialRouteName: 'authNav',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const CreateApp = createAppContainer(Swetch);
export default class App extends React.Component {
  render() {
    return <CreateApp />;
  }
}
