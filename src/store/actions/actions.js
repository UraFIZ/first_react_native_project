import { ADD_PLACE, DELETE_PLACE } from './actionTypes';
import PlaceImage from '../../assets/Priroda-v-avguste.jpg';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: {
      key: `${Math.floor(Math.random() * 100)}`,
      name: placeName,
      image: PlaceImage,
    },
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    payload: key,
  };
};
