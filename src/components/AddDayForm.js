import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
	render() {
		return (
			<form className="add-day-form">
				<label htmlFor="game">Game:</label>
				<input id="game" type="text" required />
				<label htmlFor="date">Date:</label>
				<input id="date" type="date" required />
				<div>
					<input id="coop" type="checkbox" />
					<label htmlFor="coop">Coop:</label>
				</div>
				<div>
					<input id="livestream" type="checkbox" />
					<label htmlFor="livestream">Livestreamed:</label>
				</div>
			</form>
		)
	}
}

AddDayForm.propTypes = {
	game: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	coop: PropTypes.bool.isRequired,
	livestream: PropTypes.bool.isRequired
}
