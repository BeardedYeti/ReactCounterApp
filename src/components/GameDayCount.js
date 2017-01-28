import { Component } from 'react'
import '../stylesheets/ui.scss'

const percentDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcProgress = (total, goal) => {
	return percentDecimal(total/goal)
}

export const GameDayCount = (props) => (
	<div className="game-day-count">
		<div className="total-days">
			<span>{props.total}</span>
			<span> days</span>
		</div>
		<div className="coop-days">
			<span>{props.coop}</span>
			<span> days</span>
		</div>
		<div className="livestream-days">
			<span>{props.livestream}</span>
			<span> days</span>
		</div>
		<div>
			<span>
				{calcProgress(props.total, props.goal)}
			</span>
		</div>
	</div>
)
