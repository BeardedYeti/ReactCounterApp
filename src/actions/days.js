import constants from '../constants'

// Add day app logic here...

// Add Day Action
export function addDay(game, date, coop, livestream) {
	return {
		type: constants.ADD_DAY,
		payload: {game,date,coop,livestream}
	}
}

// Remove Day Action
export const removeDay = function(date) {
	return {
		type: constants.REMOVE_DAY,
		payload: date
	}
}

// Set Day Goal Action
export const setGoal = (goal) => ({
	type: constants.SET_GOAL,
	payload: goal
})

// Add Error
export const addError = (message) => 
   ({
   	  type: constants.ADD_ERROR,
   	  payload: message
   })

// Clear Error
export const clearError = index => 
	({
		type: constants.CLEAR_ERROR,
		payload: index
	})

// Update Suggestions
export const changeSuggestions = suggestions => 
	({
	  	type: constants.CHANGE_SUGGESTIONS,
	  	payload: suggestions
	})

// Clear Suggestions
export const clearSuggestions = () => 
	({
		type: constants.CLEAR_SUGGESTIONS
	})

/* Thunks */

// Random Goals
export const randomGoals = () => (dispatch, getState) => {
	if (!getState().gameNames.fetching) {
		dispatch({
			type: constants.FETCH_GAME_NAMES
		})

		setTimeout(() => {
			dispatch({
				type: constants.CANCEL_FETCHING
			})
		}, 1500)
	}
	
}
