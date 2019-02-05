/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { View, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: '',
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val,
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPressButton(this.state.placeName);
  };

  render() {
    const { placeName } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.placeInput}
          value={placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <TouchableOpacity style={styles.placeButton}>
          <Button title="Add" onPress={this.placeSubmitHandler} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  placeInput: {
    padding: 5,
    width: '70%',
    alignSelf: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
  placeButton: {
    width: '30%',
  },
});

export default PlaceInput;
