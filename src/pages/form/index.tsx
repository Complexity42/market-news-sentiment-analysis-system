import "./index.css";
import schema from "../../yup/basic";
import { Formik, Form } from "formik";

const FormPage = () => {
	return (
		<div className="form-container">
			<Formik
				initialValues={{
					name: "",
					email: "",
					phone: "",
					password: "",
					confirmPassword: "",
				}}
				validationSchema={schema}
				onSubmit={(props) => {
					// submit color here...
				}}>
				{(props) => (
					<Form>
						<input
							name="name"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							defaultValue={props.initialValues.name}
							autoFocus
						/>

						{props.touched.name && props.errors.name ? (
							<p className="warning-text">{props.errors.name}</p>
						) : (
							<p>ok</p>
						)}

						<input
							type="email"
							name="email"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							defaultValue={props.initialValues.email}
						/>

						{props.touched.email && props.errors.email ? (
							<p className="warning-text">{props.errors.email}</p>
						) : (
							<p>ok</p>
						)}


						<input
							name="phone"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							defaultValue={props.initialValues.phone}
						/>

						{props.touched.phone && props.errors.phone ? (
							<p className="warning-text">{props.errors.phone}</p>
						) : (
							<p>ok</p>
						)}

						<input
							name="password"
							type="password"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							defaultValue={props.initialValues.password}
						/>

						{props.touched.password && props.errors.password ? (
							<p className="warning-text">{props.errors.password}</p>
						) : (
							<p>ok</p>
						)}

						<input
							name="confirmPassword"
							type="password"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							defaultValue={props.initialValues.confirmPassword}
						/>

						{props.touched.confirmPassword && props.errors.confirmPassword ? (
							<p className="warning-text">{props.errors.confirmPassword}</p>
						) : (
							<p>ok</p>
						)}

						<input type="submit" value="submit" />
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default FormPage;
