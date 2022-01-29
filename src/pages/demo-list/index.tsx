
import { useState } from 'react';

import Delete from "@mui/icons-material/Delete";
import Refresh from "@mui/icons-material/Refresh";
import Send from "@mui/icons-material/Send";
import Upload from "@mui/icons-material/Upload";
import UploadFile from "@mui/icons-material/UploadFile";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined";
import ThumbUp from "@mui/icons-material/ThumbUp";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import Navigation from "@mui/icons-material/Navigation";
import Add from "@mui/icons-material/Add";
import Edit from "@mui/icons-material/Edit";
import Slider from "@mui/material/Slider";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

import "./index.css";

interface ISinglePageProps  {
	color: string;
	children: React.ReactNode;
}

const SinglePage = (props: ISinglePageProps) => {
	return (
		<Box sx={{ bgcolor: props.color }}>
			<Container>
				<Box py={8}>
					{props.children}
				</Box>
			</Container>
		</Box>
	);
}

const whiteTheme = createTheme({
	typography: {
		allVariants: {
			color: "white",
		}
	},
});

const normalTheme = createTheme({
	typography: {
		allVariants: {
			color: "#3f3b3b",
		}
	},
});

const DemoListPage = () => {

	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={whiteTheme}>
			{/* typography */}
			<SinglePage color="#fc5185">
				<Stack spacing={3}>

					<Typography variant="h2">Typography</Typography>

					<Typography variant="body1">standardized font sizes.</Typography>

					<Divider />

					<Typography variant="h1" component="div" gutterBottom>
						h1. Heading
					</Typography>

					<Typography variant="h2" gutterBottom component="div">
						h2. Heading
					</Typography>

					<Typography variant="h3" gutterBottom component="div">
						h3. Heading
					</Typography>

					<Typography variant="h4" gutterBottom component="div">
						h4. Heading
					</Typography>

					<Typography variant="h5" gutterBottom component="div">
						h5. Heading
					</Typography>

					<Typography variant="h6" gutterBottom component="div">
						h6. Heading
					</Typography>

					<Typography variant="subtitle1" gutterBottom component="div">
						subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
						blanditiis tenetur
					</Typography>

					<Typography variant="subtitle2" gutterBottom component="div">
						subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
						blanditiis tenetur
					</Typography>

					<Typography variant="body1" gutterBottom>
						body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
						blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
						neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
						quasi quidem quibusdam.
					</Typography>

					<Typography variant="body2" gutterBottom>
						body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
						blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
						neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
						quasi quidem quibusdam.
					</Typography>

					<Typography variant="button" display="block" gutterBottom>
						button text
					</Typography>

					<Typography variant="caption" display="block" gutterBottom>
						caption text
					</Typography>

					<Typography variant="overline" display="block" gutterBottom>
						overline text
					</Typography>
				</Stack>
			</SinglePage>

			<SinglePage color="#364f6b">
				<Stack spacing={3}>
					<Typography variant="h2">Button</Typography>

					<Typography variant="body1">standardized button styles.</Typography>

					<Divider />

					<Typography variant="h4">Colored Button</Typography>

					<Stack spacing={3} direction="row">
						<Button variant="contained">primary</Button>
						<Button variant="contained" color="secondary">secondary</Button>
						<Button variant="contained" color="success">success</Button>
						<Button variant="contained" color="error">error</Button>
					</Stack>

					<Divider />

					<Typography variant="h4">Small sized Button</Typography>

					<Stack spacing={3} direction="row">
						<Button variant="contained" size="small">Contained</Button>
						<Button variant="contained" size="small" disabled> Disabled </Button>
						<Button variant="contained" size="small" href="#contained-buttons"> Link </Button>
					</Stack>

					<Divider />

					<Typography variant="h4">Medium sized Button</Typography>

					<Stack spacing={3} direction="row">
						<Button variant="contained">Contained</Button>
						<Button variant="contained" disabled> Disabled </Button>
						<Button variant="contained" href="#contained-buttons"> Link </Button>
					</Stack>

					<Divider />

					<Typography variant="h4">Large sized Button</Typography>

					<Stack spacing={3} direction="row">
						<Button variant="contained" size="large">Contained</Button>
						<Button variant="contained" size="large" disabled> Disabled </Button>
						<Button variant="contained" size="large" href="#contained-buttons"> Link </Button>
					</Stack>

					<Divider />

					<Typography variant="h4">Button with icons</Typography>

					<Stack columnGap={3} rowGap={3} direction="row" flexWrap="wrap">
						<Button variant="contained" startIcon={<Delete />}>
							Delete
						</Button>

						<Button variant="contained" endIcon={<Send />}>
							Send
						</Button>

						<Button variant="contained" startIcon={<Upload />}>
							Upload
						</Button>

						<Button variant="contained" startIcon={<UploadFile />}>
							Upload File
						</Button>

						<Button variant="contained" startIcon={<Refresh />}>
							Refresh
						</Button>
					</Stack>

					<Divider />
				</Stack>
			</SinglePage>

			<SinglePage color="#ffcdab">
				<ThemeProvider theme={normalTheme}>
					<Stack spacing={3}>
						<Typography variant="h2">More basic inputs</Typography>

						<Typography variant="body1">standardized text fields, checkbox, radio button, select..., etc.</Typography>

						<Divider />

						<Typography variant="h4">Text fields</Typography>

						<Stack columnGap={3} rowGap={3} direction="row" flexWrap="wrap">
							<TextField
								required
								id="filled-required"
								label="Required"
								defaultValue="Hello World"
								variant="filled"
							/>
							<TextField
								disabled
								id="filled-disabled"
								label="Disabled"
								defaultValue="Hello World"
								variant="filled"
							/>
							<TextField
								id="filled-password-input"
								label="Password"
								type="password"
								autoComplete="current-password"
								variant="filled"
							/>
							<TextField
								id="filled-read-only-input"
								label="Read Only"
								defaultValue="Hello World"
								InputProps={{
									readOnly: true,
								}}
								variant="filled"
							/>
							<TextField
								id="filled-number"
								label="Number"
								type="number"
								InputLabelProps={{
									shrink: true,
								}}
								variant="filled"
							/>
							<TextField
								id="filled-search"
								label="Search field"
								type="search"
								variant="filled"
							/>
							<TextField
								id="filled-helperText"
								label="Helper text"
								defaultValue="Default Value"
								helperText="Some important text"
								variant="filled"
							/>
						</Stack>

						<Divider />

						<Typography variant="h4">Auto Complete</Typography>

						<Stack spacing={3}>
							<Autocomplete
								disablePortal
								id="autocomplete-id"
								options={Array.from({length: 20}).map((e, i) => `option ${i + 1}.`)}
								sx={{ width: 300 }}
								renderInput={(params) => <TextField {...params} label="Autocomplete" variant="filled"/>}
							/>
						</Stack>

						<Divider />

						<Typography variant="h4">Checkboxes</Typography>

						<Stack spacing={3}>
							<Typography variant="h6">Checkboxes group</Typography>

							<FormGroup>
								<FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
								<FormControlLabel disabled control={<Checkbox />} label="Disabled" />
							</FormGroup>

							<Typography variant="h6">Icon checkboxes</Typography>

							<Stack direction="row" spacing={3}>
								<Checkbox
									icon={<FavoriteBorder />}
									checkedIcon={<Favorite />}
								/>
								<Checkbox
									icon={<BookmarkBorderIcon />}
									checkedIcon={<BookmarkIcon />}
								/>
								<Checkbox
									icon={<ThumbUpOutlined />}
									checkedIcon={<ThumbUp />}
								/>
							</Stack>
						</Stack>

						<Divider />

						<Typography variant="h4">Radio Buttons</Typography>

						<Stack spacing={3}>
							<FormControl>
								<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
								<RadioGroup
									aria-labelledby="demo-radio-buttons-group-label"
									defaultValue="female"
									name="radio-buttons-group"
								>
									<FormControlLabel value="female" control={<Radio />} label="Female" />
									<FormControlLabel value="male" control={<Radio />} label="Male" />
									<FormControlLabel value="other" control={<Radio />} label="Other" />
								</RadioGroup>
							</FormControl>
						</Stack>

						<Divider />

						<Typography variant="h4">Floating buttons</Typography>

						<Stack columnGap={3} rowGap={3} direction="row" flexWrap="wrap">
							<Fab color="primary" aria-label="add">
								<Add />
							</Fab>

							<Fab color="secondary" aria-label="edit">
								<Edit />
							</Fab>

							<Fab variant="extended">
								<Navigation />
								Navigate
							</Fab>

							<Fab disabled aria-label="like">
								<Favorite />
							</Fab>
						</Stack>

						<Divider />

						<Typography variant="h4">Select</Typography>

						<Stack spacing={3}>
							<FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
								<InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									// value={age}
									label="Age"
									// onChange={handleChange}
								>
									<MenuItem value="">
									<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
								<FormHelperText>With label + helper text</FormHelperText>
							</FormControl>
						</Stack>

						<Divider />

						<Typography variant="h4">Slider</Typography>

						<Stack spacing={3}>
							<Slider defaultValue={50}/>

							<Slider
								aria-label="Restricted values"
								defaultValue={20}
								valueLabelFormat={(value: number) => `value: ${value}`}
								step={null}
								valueLabelDisplay="auto"
								marks={Array.from({ length: 3}).map(((e, i) => ({ value: (i + 1) * 25, label: `label: ${i + 1}`})))}
							/>

							<Slider defaultValue={[33,66]} />
						</Stack>
					</Stack>
				</ThemeProvider>
			</SinglePage>

			<SinglePage color="#e8ffe8">
				<ThemeProvider theme={normalTheme}>
					<Stack spacing={3}>
						<Typography variant="h2">Basic display</Typography>

						<Typography variant="body1">layout data display and some complex shapes.</Typography>

						<Divider />

						<Typography variant="h4">Badge</Typography>

						<Stack spacing={3} direction="row">
							<Typography variant="h6">Simple badge</Typography>

							<Badge badgeContent={4} color="primary">
								<Upload color="primary" />
							</Badge>	
						</Stack>

						<Stack spacing={3} direction="row">
							<Typography variant="h6">Button</Typography>

							<Badge badgeContent={4} color="error">
								<IconButton color="error" aria-label="add an alarm" sx={{p: 0}}>
									<Upload />
								</IconButton>
							</Badge>
						</Stack>

						<Divider />

						<Typography variant="h4">List</Typography>

						<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
							<nav aria-label="main mailbox folders">
								<List>
									<ListItem disablePadding>
										<ListItemButton>
										<ListItemIcon>
											<InboxIcon />
										</ListItemIcon>
										<ListItemText primary="Inbox" />
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton>
										<ListItemIcon>
											<DraftsIcon />
										</ListItemIcon>
										<ListItemText primary="Drafts" />
										</ListItemButton>
									</ListItem>
								</List>
							</nav>

							<Divider />

							<nav aria-label="secondary mailbox folders">
								<List>
									<ListItem disablePadding>
										<ListItemButton>
										<ListItemText primary="Trash" />
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton component="a" href="#simple-list">
										<ListItemText primary="Spam" />
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
						</Box>

						<List
							sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
							component="nav"
							aria-labelledby="nested-list-subheader"
							subheader={
								<ListSubheader component="div" id="nested-list-subheader">
									Nested List Items
								</ListSubheader>
							}
						>
							<ListItemButton>
								<ListItemIcon>
									<Send />
								</ListItemIcon>
								<ListItemText primary="Sent mail" />
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<DraftsIcon />
								</ListItemIcon>
								<ListItemText primary="Drafts" />
							</ListItemButton>
							<ListItemButton onClick={handleClick} >
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary="Inbox" />
								{ open ? <ExpandLess /> : <ExpandMore /> }
							</ListItemButton>

							<Collapse in={open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemIcon>
											<StarBorder />
										</ListItemIcon>
										<ListItemText primary="Starred" />
									</ListItemButton>
								</List>
							</Collapse>
						</List>

						<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar>
										<ImageIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="Photos" secondary="Jan 9, 2014" />
							</ListItemButton>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar>
										<WorkIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="Work" secondary="Jan 7, 2014" />
							</ListItemButton>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar>
										<BeachAccessIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary="Vacation" secondary="July 20, 2014" />
							</ListItemButton>
						</List>

						<Divider />
					</Stack>
				</ThemeProvider>
			</SinglePage>
		</ThemeProvider>
	);
}

export default DemoListPage;
