import { createStore, combineReducers /* compose */ } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import placeReducer from './reducers/places';

const rootReducer = combineReducers({
  places: placeReducer,
});

/* const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
 */



/* let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} */

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools() /* composeEnhancers() */);
};

export default configureStore;
