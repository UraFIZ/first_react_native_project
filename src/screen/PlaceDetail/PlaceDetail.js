/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class PlaceDetail extends Component {
  render() {
    console.log(this.props);
    const { selectedPlace } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image style={styles.imgBehaver} source={selectedPlace.image} />
        <Text style={styles.textSize}>{selectedPlace.name}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Icon sizcontainere={30} name="trash-can" color="red" />
          </TouchableOpacity>
          <Button style={styles.buttonBehaver} title="Close" /* onPress={onItemClosed} */ />
        </View>
        <Button title="There is nothing" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  textSize: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonBehaver: {
    width: 100,
  },
  imgBehaver: {
    width: '100%',
    height: 200,
  },
});
export default PlaceDetail;
