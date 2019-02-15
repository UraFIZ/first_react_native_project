/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import NavigationService from '../../../NavigationService';

class LogoTitle extends React.Component {
  render() {
    return <Icon name="access-point" size={20} />;
  }
}

export default class FindPlace extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <LogoTitle />,
      title: navigation.state.routeName,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('SharePlaceScreen', { name: 'blabla' })}
          title="Share"
          color="rgba(0,122,255,1)"
          backgroundColor="rgba(0,0,0,0)"
        />
      ),
    };
  };

  render() {
    console.log(this.props);

    return (
      <Button
        onPress={() => NavigationService.navigate('SharePlaceScreen', { name: 'blabla' })}
        title="Share"
        color="rgba(0,122,255,1)"
        backgroundColor="rgba(0,0,0,0)"
      />
    );
  }
}
