import GoalProgress from '../components/GoalProgress'
import { connect } from 'react-redux'
import { setGoal } from '../actions/days'

const mapStateToProps = state =>
	({
		current: state.allGameDays.length,
		goal: state.goal
	})

const mapDispatchToProps = dispatch =>
	({
		onNewGoal(goal) {
			dispatch(
				setGoal(goal)
			)
		}
	})

export default connect(mapStateToProps, mapDispatchToProps)(GoalProgress)
				  