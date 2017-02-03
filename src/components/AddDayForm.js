import { PropTypes, Component } from 'react'

export const AddDayForm = ({ game, date, coop, livestream }) => {
	
	const submit = (e) => {
		e.preventDefault()
		console.log('game', _game.value)
		console.log('date', _date.value)
		console.log('coop', _coop.checked)
		console.log('livestream', _livestream.checked)
	}

	let _game, _date, _coop, _livestream

	return (
		<form onSubmit={submit} className="add-day-form">
			<label htmlFor="game">Game:</label>
			<input id="game" 
				   type="text" 
				   required 
				   defaultValue={game}
				   ref={input => _game = input}/>
			<label htmlFor="date">Date:</label>
			<input id="date" 
			       type="date" 
			       required 
			       defaultValue={date}
			       ref={input => _date = input}/>
			<div>
				<input id="coop" 
					   type="checkbox" 
					   defaultChecked={coop}
					   ref={input => _coop = input}/>
				<label htmlFor="coop">Coop:</label>
			</div>
			<div>
				<input id="livestream" 
				       type="checkbox" 
				       defaultChecked={livestream}
				       ref={input => _livestream = input}/>
				<label htmlFor="livestream">Livestreamed:</label>
			</div>
			<button>Add</button>
		</form>
	)

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
