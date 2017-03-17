import constants from '../constants'
import appReducer from '../reducers/reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

//Middleware
const consoleMessages = store => next => action => {
	let result
	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('Game Days', store.getState().allGameDays.length)
	result = next(action)
	let { allGameDays, goal, errorMsgs, gameNames } = store.getState() 
	console.log(`

		game days: ${allGameDays.length}
		goal: ${goal}
		fetching: ${gameNames.fetching}
		suggestions: ${gameNames.suggestions}
		errorMsgs: ${errorMsgs.length}

	`)

	console.groupEnd()
	return result
}

// Creates A Store
export default (initialState={}) => {
	return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}
