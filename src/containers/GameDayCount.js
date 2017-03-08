import GameDayCount from '../components/GameDayCount'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		total: state.allGameDays.length,
		coop: state.allGameDays.filter(day => day.coop).length,
		livestream: state.allGameDays.filter(day => day.livestream).length
	}
}

const Container = connect(mapStateToProps)(GameDayCount)

export default Container
