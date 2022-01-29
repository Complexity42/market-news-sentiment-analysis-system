import "./index.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Refresh from "@mui/icons-material/Refresh";
import Upload from "@mui/icons-material/Upload";
import schema from "../../../yup/basic";
import { Formik, Form } from "formik";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const HalfImagePage = () => {
	return (
		<Grid container>
			<Grid item xs={12} md={4}>
				<img className="half-image" src="https://images.pexels.com/photos/131773/pexels-photo-131773.jpeg" alt="" />
			</Grid>

			<Grid item xs={12} md={8}>
				<Box sx={{py: 0, px: "2rem"}}>
					<Stack direction="column" rowGap={3}>
						<Typography variant="h2" sx={{fontWeight: 700, textTransform: "uppercase"}}>Half image page</Typography>
						<Typography variant="caption" sx={{ color: "#333"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias iste distinctio quibusdam fugiat libero odio voluptatem! Doloribus magni iusto quaerat assumenda a laudantium commodi aut recusandae adipisci, perspiciatis vitae.</Typography>

						<Divider />

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
								alert("submitted.");
							}}>
							{(props) => (
								<Form>
									<Stack direction="column" rowGap={3}>
										<TextField
											label="Username"
											name="name"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											defaultValue={props.initialValues.name}
											value={props.values.name}
											autoFocus
											variant="filled"
											fullWidth
											helperText={props.touched.name && props.errors.name || "Quidem, explicabo inventore quos labore dignissimos rerum possimus facilis totam ratione doloremque officiis sint vel reiciendis aperiam corrupti ullam."}
											error={!!(props.touched.name && props.errors.name)}
										/>

										<TextField
											type="email"
											label="Email"
											name="email"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											defaultValue={props.initialValues.email}
											value={props.values.email}
											variant="filled"
											fullWidth
											helperText={props.touched.email && props.errors.email || "Exercitation eiusmod mollit commodo quis deserunt excepteur sint."}
											error={!!(props.touched.email && props.errors.email)}
										/>

										<TextField
											label="Phone number"
											name="phone"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											defaultValue={props.initialValues.phone}
											value={props.values.phone}
											variant="filled"
											fullWidth
											helperText={props.touched.phone && props.errors.phone || "Do dolor consectetur consectetur sunt cupidatat minim dolor culpa nostrud veniam sit aute anim."}
											error={!!(props.touched.phone && props.errors.phone)}
										/>

										<TextField
											label="Password"
											name="password"
											type="password"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											defaultValue={props.initialValues.password}
											value={props.values.password}
											variant="filled"
											fullWidth
											helperText={props.touched.password && props.errors.password || "Officia id culpa eu consequat duis nisi."}
											error={!!(props.touched.password && props.errors.password)}
										/>

										<TextField
											label="Confirm Password"
											name="confirmPassword"
											type="password"
											onChange={props.handleChange}
											onBlur={props.handleBlur}
											defaultValue={props.initialValues.confirmPassword}
											value={props.values.confirmPassword}
											variant="filled"
											fullWidth
											helperText={props.touched.confirmPassword && props.errors.confirmPassword || "Eu qui mollit sunt est cillum."}
											error={!!(props.touched.confirmPassword && props.errors.confirmPassword)}
										/>

										<Typography variant="caption" sx={{ color: "#777" }}>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis nam, dolor deserunt blanditiis iste quibusdam id, veniam aliquid vero expedita impedit cupiditate rem sapiente ipsam reprehenderit tempora! Totam, mollitia!
											Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque distinctio quidem? Totam error molestias dolores impedit adipisci minima quos provident possimus nisi rerum, sequi maxime architecto fugiat sed veritatis.
										</Typography>

										<Typography variant="caption" sx={{ color: "#777" }}>
											Anim consequat magna esse esse nisi quis cupidatat anim Lorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae harum veritatis atque, sint, ea rerum maiores similique at dolor voluptates consequatur doloribus modi officia nostrum adipisci expedita nihil ipsum!
										</Typography>

										<FormGroup>
											<FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
										</FormGroup>

										<Stack direction="row" columnGap={3}>
											<Button variant="contained" startIcon={<Upload />} onClick={() => {props.submitForm()}}>
												Sign up
											</Button>

											<Button color="secondary" variant="contained" startIcon={<Refresh />} onClick={() => {props.resetForm()}}>
												Reset
											</Button>
										</Stack>

										<Divider />

										<Typography variant="caption" sx={{ color: "#333" }}>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis nam, dolor deserunt blanditiis iste quibusdam id, veniam aliquid vero expedita impedit cupiditate rem sapiente ipsam reprehenderit tempora! Totam, mollitia!
										</Typography>
									</Stack>
								</Form>
							)}
						</Formik>
					</Stack>
				</Box>
			</Grid>
		</Grid>
	);
}

export default HalfImagePage;
