import { PropTypes } from 'React'
import FaClose from 'react-icons/lib/fa/close'
import '../stylesheets/ui.scss'

const ShowErrors = ({ errorMsgs=[], onClearError=f=>f }) =>
	<div className="show-errors">
		{(errorMsgs.length) ?
			errorMsgss.map((message, i) =>
				<div key={i} className="error">
					<p>{message}</p>
					<FaClose onClick={() => onClearError(i)}/>
				</div>
			) : 
			null
		}
	</div>

ShowErrors.propTypes = {
	errorMsgs: PropTypes.array,
	onClearError: PropTypes.func
}

export default ShowErrors
