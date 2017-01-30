import '../stylesheets/ui.scss'
import FaGroup from 'react-icons/lib/fa/group'
import FaGamepad from 'react-icons/lib/fa/gamepad'
import FaTwitch from 'react-icons/lib/fa/twitch'
import { PropTypes } from 'react'

const percentDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcProgress = (total, goal) => {
	return percentDecimal(total/goal)
}

export const GameDayCount = ({total=70, coop=20, livestream=10, goal=100}) => (
	<div className="game-day-count">
		<div className="total-days">
			<span>{total}</span>
				<FaGamepad />
			<span> days</span>
		</div>
		<div className="coop-days">
			<span>{coop}</span>
				<FaGroup />
			<span> days</span>
		</div>
		<div className="livestream-days">
			<span>{livestream}</span>
				<FaTwitch />
			<span> days</span>
		</div>
		<div>
			<span>
				{calcProgress(total, goal)}
			</span>
		</div>
	</div>
)

GameDayCount.propTypes = {
  total: PropTypes.number,
  coop: PropTypes.number,
  livestream: PropTypes.number,
  goal: PropTypes.number
}
