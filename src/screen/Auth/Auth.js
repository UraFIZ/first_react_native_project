/* eslint-disable lines-between-class-members */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

export default class Auth extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: !navigation.getParam('otherParam')
        ? navigation.state.routeName
        : navigation.getParam('otherParam'),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title="Switch to Login" />

        <TextInput placeholder="Your E-Mail Address" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm Password" />
        <Button
          title="Submit"
          onPress={() => this.props.navigation.navigate('Nav', { sreeen: 'FIndScreen' })}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
