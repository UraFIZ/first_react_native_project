import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, payload],
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
