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
					game: "Overwatch",
					date: "2016-01-01",
					coop: true,
					livestream: false
				}
			]
		}
		this.addDay = this.addDay.bind(this)
	}
	addDay(newDay) {
		this.setState({
			allGameDays: [
				...this.state.allGameDays,
				newDay
			]
		})
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
					<AddDayForm onNewDay={this.addDay}/> :
					<GameDayList days={this.state.allGameDays}
								 filter={this.props.params.filter}/>
			}
			</div>
		)
	}
}