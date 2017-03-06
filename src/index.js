import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import { App } from './components/App'
import { Error404 } from './components/Error404'
import { Router, Route, hashHistory } from 'react-router'
import constants from './constants'
import storeFactory from './store/store.js'

const initialState = (localStorage['redux-store']) ?
	JSON.parse(localStorage['redux-store']) :
	{}

const saveState = () => {
	const state = JSON.stringify(store.getState())
	localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(saveState)

store.dispatch({
	type: constants.ADD_DAY,
	payload: {
		"game": "Minecraft",
		"date": "2017-03-06",
		"coop": true,
		"livestream": true
	}
})

store.dispatch({
	type: constants.ADD_DAY,
	payload: {
		"game": "World of Warcraft",
		"date": "2017-03-07",
		"coop": true,
		"livestream": true
	}
})

store.dispatch({
	type: constants.ADD_DAY,
	payload: {
		"game": "For Honor",
		"date": "2017-03-08",
		"coop": true,
		"livestream": true
	}
})

window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="list" component={App}>
			<Route path=":filter" component={App} />
		</Route>
		<Route path="add" component={App}/>
		<Route path="*" component={Error404}/>
	</Router>,
	document.getElementById('react-container')
)