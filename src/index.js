import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import fetch from 'isomorphic-fetch'
import constants from './constants'
import sampleData from './initialState.json'
import storeFactory from './store/store'
import { addError } from './actions/days'

// Fetches initial data from API database

	const actURL = (process.env.NODE_ENV === 'development') ?
		'http://localhost:8080/api/activities/' :
		'http://localhost:3000/api/activities/'
	fetch(actURL)
		.then(response => 
			(response.status >= 400) ? 
				console.log("Bad Response") : 
				response.json()
		)
		.then((activities) => toObject(activities))
		.then((activities) => console.log(activities))

const toObject = arr => {
  let rv = {}
  for (let i = 0; i < arr.length; ++i)
    rv[i] = arr[i]
  return rv
}

console.log(dbData())
//console.log(sampleData)

// Sets initial state
const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    //sampleData
    

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
	store.dispatch(
		addError(error.message)
	)
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

window.addEventListener("error", handleError)

render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('react-container')
)
