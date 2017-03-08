import { PropTypes } from 'react'
import { Link } from 'react-router'
import GameDayRow from './GameDayRow'
import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'
import '../stylesheets/ui.scss'

const GameDayList = ({ days, filter, onRemoveDay=f=>f }) => {
	const filteredDays = (!filter || !filter.match(/coop|livestream/)) ?
	  	days :
	  	days.filter(day => day[filter])

	const activeFilterStyle = {
	    textDecoration: 'none',
	    color: 'Gray'
	}

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
							<Link to="list" style={(!filter) ? activeFilterStyle : null}>
								All Days 
							</Link>
							<Link to="/list/coop" activeStyle={activeFilterStyle}>
								Coop Days
							</Link>
							<Link to="/list/livestream" activeStyle={activeFilterStyle}>
								Livestreaming Days
							</Link>
						</td>
					</tr>
				</thead>
				<tbody>
					{filteredDays.map((day, i) =>
						<GameDayRow key={i} 
									{...day}
									onRemoveDay={onRemoveDay} 
						/>
						)}
				</tbody>
			</table>
		</div>
	)
}

GameDayList.propTypes = {
	filter: PropTypes.oneOf(['coop', 'livestream']),
	onRemoveDay: PropTypes.func,
	days: (props) => (!Array.isArray(props.days)) ? 
		new Error("GameDayList should be an array") :
		(!props.days.length) ?
			new Error("GameDayList must have at least one record") :
			null
}

export default GameDayList
