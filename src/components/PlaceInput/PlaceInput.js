/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, withTheme, Button } from 'react-native-paper';

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
    const { colors } = this.props.theme;
    return (
      <View style={styles.container}>
        {/*        <Text style={{ color: colors.primary, fontFamily: fonts.medium, fontSize: 30 }}>Yo!!!</Text> */}
        <TextInput
          style={styles.placeInput}
          value={placeName}
          onChangeText={this.placeNameChangedHandler}
          // theme={{ fonts: { thin: 'Open Sans' } }}
        />
        <TouchableOpacity style={styles.placeButton}>
          <Button
            color="black"
            onPress={this.placeSubmitHandler}
            theme={{ fonts: { medium: 'Open Sans' } }}
            style={{ backgroundColor: colors.primary }}
            // theme={{ fonts: { light: 'sans-serif-light' } }}
          >
            Press me
          </Button>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  placeInput: {
    padding: 5,
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    // marginBottom: 10,
  },
  placeButton: {
    width: 130,
    // backgroundColor: 'green',
  },
});

export default withTheme(PlaceInput);
