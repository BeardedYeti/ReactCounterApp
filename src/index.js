import React from 'react'
import { render } from 'react-dom'
//import { GameDayList } from './components/GameDayList'
//import { GameDayCount } from './components/GameDayCount'
import { App } from './components/App'

window.React = React

render(
	<App />,
	document.getElementById('react-container')
)