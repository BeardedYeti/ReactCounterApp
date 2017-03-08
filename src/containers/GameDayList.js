import GameDayList from '../components/GameDayList'

const sample = [
	{
		"game": "Overwatch",
		"date": "2017-03-01",
		"coop": false,
		"livestream": true
	},
	{
		"game": "Minecraft",
		"date": "2017-03-02",
		"coop": true,
		"livestream": true
	},
	{
		"game": "Legend of Zelda: The Breath of the Wild",
		"date": "2017-03-03",
		"coop": true,
		"livestream": false
	}
]

export default (props) =>
	<GameDayList days={sample}
				 filter={props.params.filter}
				 onRemoveDay={date => console.log('Remove Day On ', date)} />
				 