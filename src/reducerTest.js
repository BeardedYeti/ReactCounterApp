import constants from '../constants';
import appReducer from '../reducers/reducers';
import initialState from '../initialState.json';

let state = initialState;

console.log(`
	
	Initial State
	=============
	goal: ${state.goal}
	games: ${JSON.stringify(state.allGameDays)}
	fetching: ${state.gameNames.fetching}
	suggestions: ${state.gameNames.suggestions}

`);

state = appReducer(state, {
	type: constants.SET_GOAL,
	payload: 2
});

state = appReducer(state, {
	type: constants.ADD_DAY,
	payload: {
		"game": "Minecraft",
		"date": "2017-03-06",
		"coop": true,
		"livestream": true
	}
});

state = appReducer(state, {
	type: constants.CHANGE_SUGGESTIONS,
	payload: ["Minecraft", "Overwatch", "World of Warcraft"]
});


console.log(`
	
	Next State
	=============
	goal: ${state.goal}
	games: ${JSON.stringify(state.allGameDays)}
	fetching: ${state.gameNames.fetching}
	suggestions: ${state.gameNames.suggestions}

`);
