import { PropTypes } from 'react'
import '../stylesheets/ui.scss'
import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'


export const GameDayCount = ({total=0, coop=0, livestream=0}) =>
	<div className="game-day-count">
		<div className="total-days">
			<span>{total}</span>
			<FaGamepad />
			<span>days</span>
		</div>
		<div className="coop-days">
			<span>{coop}</span>
			<FaGroup />
			<span>days</span>
		</div>
		<div className="livestream-days">
			<span>{livestream}</span>
			<FaTwitch />
			<span>days</span>
		</div>
	</div>

GameDayCount.propTypes = {
  total: PropTypes.number,
  coop: PropTypes.number,
  livestream: PropTypes.number,
}
