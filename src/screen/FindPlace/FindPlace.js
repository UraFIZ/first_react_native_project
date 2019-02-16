/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
/* import NavigationService from '../../../NavigationService'; */
import PlaceList from '../../components/PlaceList/PlaceList';

class LogoTitle extends React.Component {
  render() {
    return <Icon name="access-point" size={20} />;
  }
}

class FindPlace extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <LogoTitle />,
      title: navigation.state.routeName,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('SharePlaceScreen', { name: 'blabla' })}
          title="Share"
          color="rgba(0,122,255,1)"
          backgroundColor="rgba(0,0,0,0)"
        />
      ),
    };
  };

  render() {
    console.log(this.props);

    return (
      <View style={styles.container}>
        <PlaceList places={this.props.places} />
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
export default connect(mapStateToProps)(FindPlace);
