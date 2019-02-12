/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class SharePlace extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam'),
    };
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        <Button title="Go back" onPress={() => this.props.navigation.navigate('find')} />
      </View>
    );
  }
}
export default withNavigation(SharePlace);
