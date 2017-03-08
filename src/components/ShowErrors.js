import { PropTypes } from 'React'
import FaClose from 'react-icons/lib/fa/close'
import '../stylesheets/ui.scss'

const ShowErrors = ({ errors=[], onClearError=f=>f }) =>
	<div className="show-errors">
		{(errors.length) ?
			errors.map((message, i) =>
				<div key={i} className="error">
					<p>{message}</p>
					<FaClose onClick={() => onClearError(i)}/>
				</div>
			) : 
			null
		}
	</div>

ShowErrors.propTypes = {
	errors: PropTypes.array,
	onClearError: PropTypes.func
}

export default ShowErrors
