import { Component } from 'react'
import '../stylesheets/ui.scss'

const percentDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcProgress = (total, goal) => {
	return percentDecimal(total/goal)
}

export const GameDayCount = ({total, coop, livestream, goal}) => (
	<div className="game-day-count">
		<div className="total-days">
			<span>{total}</span>
			<span> days</span>
		</div>
		<div className="coop-days">
			<span>{coop}</span>
			<span> days</span>
		</div>
		<div className="livestream-days">
			<span>{livestream}</span>
			<span> days</span>
		</div>
		<div>
			<span>
				{calcProgress(total, goal)}
			</span>
		</div>
	</div>
)
