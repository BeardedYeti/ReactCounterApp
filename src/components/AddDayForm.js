import { PropTypes, Component } from 'react'

const popularGames = [
	"Overwatch",
	"Stardew Valley",
	"Minecraft",
	"DOTA 2",
	"League of Legends",
	"Kerbal Space Program",
	"Sid Meier's Civilization VI",
	"Battlefield 1",
	"World of Warcraft",
	"Hearthstone",
	"Counter Strike: Global Offensive",
	"Rainbow Six Siege",
	"World of Tanks",
	"Destiny",
	"Heroes of the Storm",
	"Dark Souls III",
	"Starcraft II",
	"Fallout 4",
	"Pokemon Sun and Moon",
	"ARK",
	"Smite",
	"Call of Duty Infinite Warfare",
	"Rocket League",
	"Madden 17",
	"Mass Effect",
	"Mass Effect 2",
	"Mass Effect 3",
	"Red Dead Redemption",
	"Super Smash Bros for Wii U",
	"Mario Kart 8",
	"Super Mario Maker",
	"Splatoon",
	"The Legend of Zelda: Ocarina of Time",
	"The Sims 4",
	"The Witcher 3",
	"Crusader Kings II",
	"Guild Wars 2",
	"The Witness",
	"Rust",
	"Age of Empires II",
	"The Elder Scrolls V Skyrim",
	"7 Days to Die",
	"The Last of Us",
	"Total War Warhammer",
	"Elite Dangerous",
	"The Darket Dungeon",
	"The Last Guardian",
	"Payday 2",
	"Grand Theft Auto V"
]

class Autocomplete extends Component {
	get value() {
		return this.refs.inputGames.value
	}

	set value(inputValue) {
		this.refs.inputGames.value = inputValue
	}

	render () {
		return (
			<div>
				<input ref="inputGames" 
					   type="text" 
					   list="popular-games" />
				<datalist id="popular-games">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>
					)}
				</datalist>
			</div>
		)
	}
}

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
			<Autocomplete options={popularGames}
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
