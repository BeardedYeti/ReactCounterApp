import { Component } from 'react'
import '../stylesheets/ui.scss'

export class GameDayCount extends React.Component {
	
	percentDecimal(decimal) {
		return ((decimal * 100) + '%')
	}
	calcProgress(total, goal) {
		return this.percentDecimal(total/goal)
	}

	render() {
		return (
			<div className="game-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span> days</span>
				</div>
				<div className="coop-days">
					<span>{this.props.coop}</span>
					<span> days</span>
				</div>
				<div className="livestream-days">
					<span>{this.props.livestream}</span>
					<span> days</span>
				</div>
				<div>
					<span>
						{this.calcProgress(this.props.total, this.props.goal)}
					</span>
				</div>
			</div>
		)
	}
}
