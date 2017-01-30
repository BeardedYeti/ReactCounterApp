import React from 'react'
import { render } from 'react-dom'
import { GameDayList } from './components/GameDayList'
//import { GameDayCount } from './components/GameDayCount'

window.React = React

render(
	<GameDayList days={
		[]
	}/>,
	document.getElementById('react-container')
)