/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/actions';
/* import NavigationService from '../../../NavigationService'; */
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlace extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Icon name="menu" size={40} onPress={() => navigation.toggleDrawer()} />,
      title: navigation.state.routeName,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('SharePlaceScreen')}
          title="Share"
          color="rgba(0,122,255,1)"
          backgroundColor="rgba(0,0,0,0)"
        />
      ),
    };
  };

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigation.navigate('PlaceDetailScreen', {
      selectedPlace: selPlace,
      deletePlace: this.props.deletePlace,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
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
const mapStateToProps = state => {
  return { places: state.places.places };
};
export default connect(
  mapStateToProps,
  { deletePlace },
)(FindPlace);
