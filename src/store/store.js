import constants from '../constants'
import appReducer from '../reducers/reducers'
import { createStore, applyMiddleware } from 'redux'

//Middleware
const consoleMessages = store => next => action => {
	let result
	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('Game Days', store.getState().allGameDays.length)
	result = next(action)
	let { allGameDays, goal, errors, gameNames } = store.getState() 
	console.log(`

		game days: ${allGameDays.length}
		goal: ${goal}
		fetching: ${gameNames.fetching}
		suggestions: ${gameNames.suggestions}
		errors: ${errors.length}

	`)

	console.groupEnd()
	return result
}

// Creates A Store
export default (initialState={}) => {
	return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
}
