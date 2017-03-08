import Menu from './Menu'
import ShowErrors from '../containers/ShowErrors'
import GoalProgress from '../containers/GoalProgress'
import '../stylesheets/index.scss'

export const App = ({children}) => 
    <div className="app">
        <ShowErrors />
        {children}
        <GoalProgress />
        <Menu />
    </div>

export const Error404 = () =>
	<div>
		<h1>Error, route not found</h1>
	</div>

/*export const Error404 = ({ location }) =>
    <div className="error-404">
        <h1>Error: Route Not Found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>*/