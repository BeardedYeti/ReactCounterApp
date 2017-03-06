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
