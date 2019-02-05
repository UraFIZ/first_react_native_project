import React from 'react';
// eslint-disable-next-line object-curly-newline
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ name, onItemPresed, image }) => (
  <TouchableOpacity onPress={onItemPresed}>
    <View style={styles.listItem}>
      <Image resizeMode="contain" source={image} style={styles.placeImg} />
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  placeImg: {
    margin: 8,
    width: 40,
    height: 40,
  },
});

export default ListItem;
