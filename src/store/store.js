import constants from '../constants'
import { allGameDays } from '../reducers/reducers'

const state = [
	{
		"game": "Overwatch",
		"date": "2017-03-04",
		"coop": false,
		"livestream": true
	},
	{
		"game": "Wolfenstein Enemy Territory",
		"date": "2017-03-05",
		"coop": false,
		"livestream": true
	}
]
 
const action = {
	type: constants.REMOVE_DAY,
	payload: "2017-03-04"
}

const nextState = allGameDays(state, action)

console.log(`

	initial state: ${JSON.stringify(state)}
	action: ${JSON.stringify(action)}
	new state: ${JSON.stringify(nextState)}

`)
