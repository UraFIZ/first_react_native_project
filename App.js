/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
// eslint-disable-next-line import/no-named-as-default
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, unselectPlace } from './src/store/actions/actions';

class App extends Component {
  onPressButton = placeName => {
    this.props.addPlace(placeName);
  };

  onItemSelected = key => {
    this.props.selectPlace(key);
  };

  onItemDeleted = () => {
    this.props.deletePlace();
  };

  onItemClosed = () => {
    this.props.unselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <PlaceDetail
            selectedPlace={this.props.selectedPlace}
            onItemDeleted={this.onItemDeleted}
            onItemClosed={this.onItemClosed}
          />
          <PlaceInput onPressButton={this.onPressButton} />
        </View>
        <View style={styles.placeListWrapper}>
          <PlaceList places={this.props.places} onItemSelected={this.onItemSelected} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginHorizontal: 20,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeListWrapper: {
    width: '100%',
  },
});
const mapStateToProps = ({ places }) => {
  return {
    places: places.places,
    selectedPlace: places.selectedPlace,
  };
};
/* const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onUnselectPlace: () => dispatch(unselectPlace()),
  };
}; */
export default connect(
  mapStateToProps,
  { addPlace, deletePlace, selectPlace, unselectPlace },
)(App);
