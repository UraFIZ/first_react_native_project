/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = ({ places, onItemSelected }) => (
  <FlatList
    style={styles.listContainer}
    data={places}
    renderItem={info => (
      <ListItem
        name={info.item.name}
        image={info.item.image}
        key={info.item.key}
        onItemPresed={() => onItemSelected(info.item.key)}
      />
    )}
  />
);
const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

export default PlaceList;
