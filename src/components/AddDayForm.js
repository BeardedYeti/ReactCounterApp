import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {

	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}
	
	submit(e) {
		e.preventDefault()
		console.log('game', this.refs.game.value)
		console.log('date', this.refs.date.value)
		console.log('coop', this.refs.coop.checked)
		console.log('livestream', this.refs.livestream.checked)
	}

	render() {

		const { game, date, coop, livestream } = this.props

		return (
			<form onSubmit={this.submit} className="add-day-form">
				<label htmlFor="game">Game:</label>
				<input id="game" 
					   type="text" 
					   required 
					   defaultValue={game}
					   ref="game"/>
				<label htmlFor="date">Date:</label>
				<input id="date" 
				       type="date" 
				       required 
				       defaultValue={date}
				       ref="date"/>
				<div>
					<input id="coop" 
						   type="checkbox" 
						   defaultChecked={coop}
						   ref="coop"/>
					<label htmlFor="coop">Coop:</label>
				</div>
				<div>
					<input id="livestream" 
					       type="checkbox" 
					       defaultChecked={livestream}
					       ref="livestream"/>
					<label htmlFor="livestream">Livestreamed:</label>
				</div>
				<button>Add</button>
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
