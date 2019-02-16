/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class PlaceDetail extends Component {
  onDeletePlace = () => {
    const { deletePlace, selectedPlace } = this.props.navigation.state.params;
    deletePlace(selectedPlace.key);
    this.props.navigation.goBack();
  };

  render() {
    console.log(this.props);
    const { selectedPlace, deletePlace } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image style={styles.imgBehaver} source={selectedPlace.image} />
        <Text style={styles.textSize}>{selectedPlace.name}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Icon
              style={styles.iconBehaver}
              size={60}
              name="trash-can"
              color="red"
              onPress={this.onDeletePlace}
            />
          </TouchableOpacity>
          <Button
            style={styles.buttonBehaver}
            title="Close"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
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
  iconBehaver: {
    width: 60,
    height: 60,
  },
});
export default PlaceDetail;
