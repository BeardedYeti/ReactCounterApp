import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'
import { GameDayRow } from './GameDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const GameDayList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/coop|livestream/)) ?
  	days:
  	days.filter(day => day[filter])

  return (
  	<div className="game-day-list">
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Game</th>
				<th>Coop</th>
				<th>Livestream</th>
			</tr>
			<tr>
				<td colSpan={4}>
					<Link to="list">
						All Days 
					</Link>
					<Link to="/list/coop">
						Coop Days
					</Link>
					<Link to="/list/livestream">
						Livestreaming Days
					</Link>
				</td>
			</tr>
		</thead>
		<tbody>
			{filteredDays.map((day, i) =>
				<GameDayRow key={i} 
							{...day}/>
				)}
		</tbody>
	</table>
	</div>
  )
}

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
