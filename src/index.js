import React from 'react'
import { render } from 'react-dom'
import { GameDayCount } from './components/GameDayCount'

window.React = React

render(
	<GameDayCount total={50}
					coop={20}
					livestream={30}
					goal={100}/>,
	document.getElementById('react-container')
)