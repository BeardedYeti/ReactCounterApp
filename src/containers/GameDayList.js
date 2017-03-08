import GameDayList from '../components/GameDayList'
import { connect } from 'react-redux'
import { removeDay } from '../actions/days'

const mapStateToProps = (state, props) => 
	({
		days: state.allGameDays,
		filter: props.params.filter,

	})

const mapDispatchToProps = dispatch =>
	({
		onRemoveDay(date) {
			dispatch(
				removeDay(date)
			)
		}
	})

export default connect(mapStateToProps, mapDispatchToProps)(GameDayList)
				 