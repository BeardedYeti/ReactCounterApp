import { PropTypes, Component } from 'react'
import popularGames from '../../game-names.json'
import Autocomplete from './Autocomplete'

export const AddDayForm = ({ suggestions=[], onNewDay=f=>f, onChange=f=>f, onClear=f=>f, fetching=false, router }) => {
	
	let _game, _date, _coop, _livestream

	const submit = e => {
		e.preventDefault()
		onNewDay({
			game: _game.value,
			date: _date.value.toString(),
			coop: _coop.checked,
			livestream: _livestream.checked
		})

		const addAnother = confirm(`${_game.value} on ${_date.value.toString()} added. Add another?`)
		if (!addAnother) {
			router.push('/')
		}

		_game.value = ''
		_date.value = ''
		_coop.checked = false
		_livestream.checked = false
	}

	

	return (
		<form onSubmit={submit} className="add-day-form">
			<label htmlFor="game">Game:</label>
			<Autocomplete ref={input => _game = input}
						  suggestions={suggestions}
						  onChange={() => onChange(_game.value)}
						  fetching={fetching}
						  onClear={onClear}
			/>
			<label htmlFor="date">Date:</label>
			<input id="date" 
			       type="date" 
			       ref={input => _date = input}
			       required 
			/>
			<div>
				<input id="coop" 
					   ref={input => _coop = input}
					   type="checkbox"
				/>
				<label htmlFor="coop">Coop:</label>
			</div>
			<div>
				<input id="livestream" 
				       ref={input => _livestream = input}
				       type="checkbox"
				       />
				<label htmlFor="livestream">Livestreamed:</label>
			</div>
			<button>Add</button>
		</form>
	)
}

AddDayForm.propTypes = {
    suggestions: PropTypes.array,
    onNewDay: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    router: PropTypes.object
}
