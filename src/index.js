import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import { App } from './components/App'
import { Error404 } from './components/Error404'
import { Router, Route, hashHistory } from 'react-router'
import constants from './constants'
import storeFactory from './store/store.js'
import expect from 'expect'
import { randomGoals } from './actions/days'

const store = storeFactory()

store.dispatch(
	randomGoals()
)

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
