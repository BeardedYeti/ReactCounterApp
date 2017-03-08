import { PropTypes } from 'react'
import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'

const GameDayRow = ({game, date, coop, livestream, onRemoveDay=f=>f }) =>
	<tr>
		<td>
			{date}
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


GameDayRow.propTypes = {
	game: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	coop: PropTypes.bool,
	livestream: PropTypes.bool,
	onRemoveDay: PropTypes.func
}

export default GameDayRow
