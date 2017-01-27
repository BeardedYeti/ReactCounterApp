import React from 'react'
import '../stylesheets/ui.scss'

export const GameDayCount = React.createClass({
	render() {
		return (
			<div className="game-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="coop-days">
					<span>{this.props.coop}</span>
					<span>days</span>
				</div>
				<div className="livestream-days">
					<span>{this.props.livestream}</span>
					<span>days</span>
				</div>
				<div>
					<span>{this.props.goal}</span>
				</div>
			</div>
		)
	}
})
