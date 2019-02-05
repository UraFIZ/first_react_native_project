import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const placeDetail = ({ selectedPlace, onItemDeleted, onItemClosed }) => {
  let modalContent = null;
  if (selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.imgBehaver} source={selectedPlace.image} />
        <Text style={styles.textSize}>{selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal onRequestClose={onItemClosed} visible={selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onItemDeleted}>
            <Icon size={30} name="trash-can" color="red" />
          </TouchableOpacity>
          <Button style={styles.buttonBehaver} title="Close" onPress={onItemClosed} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    margin: 32,
  },
  textSize: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonBehaver: {
    width: 100,
  },
  imgBehaver: {
    width: '100%',
    height: 200,
  },
});
export default placeDetail;
