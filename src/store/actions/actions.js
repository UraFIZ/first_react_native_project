import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from './actionTypes';
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

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    payload: key,
  };
};

export const unselectPlace = () => {
  return {
    type: UNSELECT_PLACE,
  };
};
