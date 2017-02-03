import { PropTypes } from 'react'

export const AddDayForm = ({ game, date, coop, livestream, onNewDay }) => {
	
	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			game: _game.value,
			date: _date.value,
			coop: _coop.checked,
			livestream: _livestream.checked
		})
		_game.value = ''
		_date.value = ''
		_coop.checked = false
		_livestream.checked = false
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
