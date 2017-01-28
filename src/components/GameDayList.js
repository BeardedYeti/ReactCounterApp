import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'
import { GameDayRow } from './GameDayRow'

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
							game={day.game}
							date={day.date}
							coop={day.coop}
							livestream={day.livestream}/>
				)}
		</tbody>
	</table>
)