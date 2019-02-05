/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = ({ places, onItemSelected }) => (
  <FlatList
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
export default PlaceList;
