import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'

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