import "./index.css";

import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import CounterStore from '../../mobx/CounterStore';
import { observer } from "mobx-react";

const Navbar = () => {
	return (
		<div>
			<div className="navbar-margin"></div>

			<div className="navbar">
				<div className="navbar-home">
					<Link to="/">HOME</Link>

					<div className="navbar-title">
						it is navbar.
					</div>
				</div>

				<div className="navbar-rightmost-items">
					<LoginButton/>
					<LogoutButton/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
