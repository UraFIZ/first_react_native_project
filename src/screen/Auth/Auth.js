/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button, TouchableNativeFeedback } from 'react-native';

export default class Auth extends Component {
  render() {
    return (
      <TouchableNativeFeedback>
        <Button
          title="Authontification"
          onPress={() => this.props.navigation.navigate('Nav', { sreeen: 'FIndScreen' })}
        />
      </TouchableNativeFeedback>
    );
  }
}
