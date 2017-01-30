import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'
import { PropTypes } from 'react'

export const GameDayRow = ({game, date, coop, livestream}) => (
	<tr>
		<td>
			{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
		</td>
		<td>
			{game}
		</td>
		<td>
			{(coop) ? <FaGroup/> : null}
		</td>
		<td>
			{(livestream) ? <FaTwitch/> : null}
		</td>
	</tr>

)

GameDayRow.propTypes = {
	game: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	coop: PropTypes.bool,
	livestream: PropTypes.bool
}