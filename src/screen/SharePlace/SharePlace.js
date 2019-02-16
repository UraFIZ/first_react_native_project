/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/actions';

class SharePlace extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: !navigation.getParam('otherParam')
        ? navigation.state.routeName
        : navigation.getParam('otherParam'),
    };
  };

  placeAddedHadler = placeName => {
    this.props.addPlace(placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPressButton={this.placeAddedHadler} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default connect(
  null,
  { addPlace },
)(SharePlace);
