/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import { View, Text } from 'react-native';
import AuthScreen from './src/screen/Auth/Auth';
import FindPlaceScreen from './src/screen/FindPlace/FindPlace';
import SharePlaceScreen from './src/screen/SharePlace/SharePlace';
import NavigationService from './NavigationService';
import PlaceDetailScreen from './src/screen/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screen/SideDrawer/SideDrawer';

const CentredText = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 18, color: 'white' }}>Auth</Text>
  </View>
);
const findStack = createStackNavigator({ FindPlaceScreen, PlaceDetailScreen });
const shartStack = createStackNavigator({ SharePlaceScreen });
const authNav = createStackNavigator({ AuthScreen });
authNav.navigationOptions = {
  titleHeader: <CentredText />,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

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
const MainNavigator = createDrawerNavigator(
  { shartStack, Nav },
  { contentComponent: SideDrawerScreen },
);
const Swetch = createSwitchNavigator(
  {
    authNav,
    MainNavigator,
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
const AppNavigation = createAppContainer(Swetch);
export default class App extends React.Component {
  state = {
    name: 'Anna',
    age: 33,
  };

  render() {
    return (
      <AppNavigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        screenProps={{
          name: this.state.name,
          age: this.state.age,
        }}
      />
    );
  }
}
