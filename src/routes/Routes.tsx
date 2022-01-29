import { Route, Routes } from "react-router-dom";
import CrossPage from "../pages/cross";
import DemoListPage from "../pages/demo-list";
import FormPage from "../pages/form";
import LandingPage from "../pages/landing";
import ProfilePage from "../pages/profile";
import RestDemoPage from "../pages/rest";
import TodoListPage from "../pages/todo-list";
import TemplateListPage from "../pages/template";
import Search from "@mui/icons-material/Search";
import SearchBar from "../components/SearchBar";
import CwkscPage from "../pages/cwksc";

const Pages = () => {
	return (
		<Routes>
			{/** firebase: auth example */}
			<Route path="/profile" element={<ProfilePage/>} />

			{/** material ui example */}
			<Route path="/demo-list" element={<DemoListPage/>} />

			{/** material ui application example */}
			<Route path="/template-list/*" element={<TemplateListPage />} />

			{/** formik and yup example */}
			<Route path="/form" element={<FormPage/>} />

			{/** firebase: firestore example */}
			<Route path="/todo" element={<TodoListPage/>} />

			{/** mobx example */}
			<Route path="/cross" element={<CrossPage/>} />
			<Route path="/rest" element={<RestDemoPage/>} />

			{/** landing page */}
			<Route path="/*" element={<CwkscPage />} />
		</Routes>
	);
}

export default Pages;