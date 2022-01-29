import { Link } from "react-router-dom";
import "./index.css";
import { observer } from "mobx-react";
import CounterStore from "../../mobx/CounterStore";

const LandingPage = observer(() => {
	return (
		<div className="landing-container">
			it is landing page.

			<div>
				go to <Link to="/profile">PROFILE</Link>.
			</div>

			<div>
				go to <Link to="/demo-list">DEMO</Link>.
			</div>

			<div>
				go to <Link to="/template-list">TEMPLATE</Link>.
			</div>

			<div>
				go to <Link to="/form">FORM</Link>.
			</div>

			<div>
				go to <Link to="/todo">TODO</Link>.
			</div>

			<div>
				go to <Link to="/cross">CROSS</Link>.
			</div>

			<div>
				go to <Link to="/rest">REST</Link>.
			</div>
		</div>
	);
});

export default LandingPage;
