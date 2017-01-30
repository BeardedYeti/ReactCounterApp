import { createClass } from 'react'
import { GameDayList } from './GameDayList'
import { GameDayCount } from './GameDayCount'

export const App = createClass({
	getInitialState() {
		return {
			allGameDays: [
				{
					game: "Stardew Valley",
					date: new Date("1/26/2017"),
					coop: false,
					livestream: false
				},
				{
					game: "Overwatch",
					date: new Date("1/27/2017"),
					coop: false,
					livestream: true
				},
				{
					game: "Seven Days to Die",
					date: new Date("1/28/2017"),
					coop: true,
					livestream: true
				}
			]
		}
	},
	countDays(filter) {
		const { allGameDays } = this.state
		return allGameDays.filter((day) => (filter) ? day[filter] : day).length
	},
	render() {
		return(
			<div className="app">
				<GameDayList days={this.state.allGameDays}/>
				<GameDayCount total={this.countDays()}
							  coop={this.countDays("coop")}
							  livestream={this.countDays("livestream")}/>

			</div>
		)
	}
})