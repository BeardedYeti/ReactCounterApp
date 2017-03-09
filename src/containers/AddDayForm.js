import AddDayForm from '../components/AddDayForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addDay, suggestGameNames, clearSuggestions } from '../actions/days'

const mapStateToProps = (state, props) =>
	({
		suggestions: state.gameNames.suggestions,
		fetching: state.gameNames.fetching,
		router: props.router
	})

const mapDispatchToProps = dispatch =>
	({
		onNewDay({ game, date, coop, livestream }) {
			dispatch(
				addDay(game, date, coop, livestream)
			)
		},
		onChange(value) {
			if (value) {
				dispatch(
					suggestGameNames(value)
				)
			} else {
				dispatch(
					clearSuggestions()
				)
			}
		},
		onClear() {
			dispatch(
				clearSuggestions()
			)
		}
	})

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(Container)
