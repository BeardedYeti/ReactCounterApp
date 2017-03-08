import ShowErrors from '../components/ShowErrors'
import { clearError } from '../actions/days'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		errors: state.errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onClearError(index) {
			dispatch(
				clearError(index)
			)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors)
						  