import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { App, Error404 } from './components'
import GameDayCount from './containers/GameDayCount'
import AddDayForm from './containers/AddDayForm'
import GameDayList from './containers/GameDayList'

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={GameDayCount}/>
			<Route path="add" component={AddDayForm}/>
			<Route path="list" component={GameDayList}>
				<Route path=":filter" component={GameDayList} />
			</Route>
		<Route path="*" component={Error404}/>
		</Route>
	</Router>
)

export default routes
