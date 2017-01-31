import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'
import FaPlus from 'react-icons/lib/fa/plus'
import FaList from 'react-icons/lib/fa/table'

export const Menu = () =>
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<FaHome />
		</Link>
		<Link to="/add" activeClassName="selected">
			<FaPlus />
		</Link>
		<Link to="/list" activeClassName="selected">
			<FaList />
		</Link>
	</nav>