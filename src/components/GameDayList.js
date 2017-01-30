import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'
import { GameDayRow } from './GameDayRow'
import { PropTypes } from 'react'

export const GameDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Game</th>
				<th>Coop</th>
				<th>Livestream</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) =>
				<GameDayRow key={i} 
							{...day}/>
				)}
		</tbody>
	</table>
)

GameDayList.propTypes = {
	days: function(props){
		if(!Array.isArray(props.days)) {
			return new Error("GameDayList should be an array")
		} else if(!props.days.length) {
			return new Error("GameDayList must have at least one record")
		} else {
			return null
		}
	}
}
