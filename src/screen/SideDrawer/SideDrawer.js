/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerItems, SafeAreaView } from 'react-navigation';

class SideDrawer extends Component {
  static navigationOptions = {
    drawerLabel: 'SideDrawer',
  };

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
        <View style={styles.row}>
          <Icon name="logout-variant" size={30} />
          <Button
            title="Log out"
            buttonStyle={styles.button}
            titleStyle={styles.title}
            onPress={() => this.props.navigation.navigate('AuthScreen')}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
  },
  button: {
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    margin: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  row: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
export default SideDrawer;
