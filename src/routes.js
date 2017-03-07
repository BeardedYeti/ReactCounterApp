import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { render } from 'react-dom'
import { App } from './components/App'
import { Error404 } from './components/Error404'
//import AddDayForm from './containers/AddDayForm'
//import GameDayList from './containers/SkiDayList'

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="list" component={App}>
			<Route path=":filter" component={App} />
		</Route>
		<Route path="add" component={App}/>
		<Route path="*" component={Error404}/>
	</Router>
)

export default routes
