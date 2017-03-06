import { createStore } from 'redux';
import constants from '../constants';
import appReducer from '../reducers/reducers';
import initialState from '../initialState.json';

// Store App State
const store = createStore(appReducer, initialState);

console.log('initial state', store.getState());

// Dispatch the Store
store.dispatch({
	type: constants.ADD_DAY,
	payload: {
		"game": "Minecraft",
		"date": "2017-03-06",
		"coop": true,
		"livestream": true
	}
})

console.log('current state', store.getState());


