import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
	render() {

		const { game, date, coop, livestream } = this.props

		return (
			<form className="add-day-form">
				<label htmlFor="game">Game:</label>
				<input id="game" 
					   type="text" 
					   required 
					   defaultValue={game}/>
				<label htmlFor="date">Date:</label>
				<input id="date" 
				       type="date" 
				       required 
				       defaultValue={date}/>
				<div>
					<input id="coop" 
						   type="checkbox" 
						   defaultChecked={coop}/>
					<label htmlFor="coop">Coop:</label>
				</div>
				<div>
					<input id="livestream" 
					       type="checkbox" 
					       defaultChecked={livestream}/>
					<label htmlFor="livestream">Livestreamed:</label>
				</div>
			</form>
		)
	}
}

AddDayForm.defaultProps = {
	game: "Overwatch",
	date: "2017-01-01",
	coop: true,
	livestream: false
}

AddDayForm.propTypes = {
	game: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	coop: PropTypes.bool.isRequired,
	livestream: PropTypes.bool.isRequired
}
