import { Component } from 'react'
import { GameDayList } from './GameDayList'
import { GameDayCount } from './GameDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component{
	constructor(props) {
		super(props)
		this.state = {
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
	}
	countDays(filter) {
		const { allGameDays } = this.state
		return allGameDays.filter((day) => (filter) ? day[filter] : day).length
	}
	render() {
		return(
			<div className="app">
			<Menu />
			{(this.props.location.pathname === "/") ? 
				<GameDayCount total={this.countDays()}
							  coop={this.countDays("coop")}
							  livestream={this.countDays("livestream")}/> :
				(this.props.location.pathname === "/add") ?
					<AddDayForm /> :
					<GameDayList days={this.state.allGameDays}/>
			}
			</div>
		)
	}
}