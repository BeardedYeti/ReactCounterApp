import React from 'react'
import { render } from 'react-dom'
import { GameDayList } from './components/GameDayList'

window.React = React

render(
	<GameDayList days={
		[
			{
				game: "Stardew Valley",
				date: new Date("1/26/2017"),
				coop: false,
				livestream: false
			},
			{
				game: "Overwatch",
				date: new Date("1/27/2017"),
				coop: false,
				livestream: true
			},
			{
				game: "Seven Days to Die",
				date: new Date("1/28/2017"),
				coop: true,
				livestream: true
			}

		]
	}/>,
	document.getElementById('react-container')
)