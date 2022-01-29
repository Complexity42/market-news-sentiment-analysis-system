import "./index.css";

import { Link, Route, Routes } from "react-router-dom";
import HalfImagePage from "./half-image-page";

const TemplateListPage = () => {
	return (
		<>
			<div className="template-list-container">
				<div className="template-list-selector">
					<div>
						it is template list page.
					</div>

					<div>
						go to <Link to="/template-list/half">HALF</Link>.
					</div>
				</div>
			</div>

			<Routes>
				<Route path="/half" element={<HalfImagePage/>} />
			</Routes>
		</>
	)
}

export default TemplateListPage;