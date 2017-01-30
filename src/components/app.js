import { createClass } from 'react'

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
	render() {
		return(
			<div className="app">
				{this.state.allGameDays[0]["game"]}

			</div>
		)
	}
})