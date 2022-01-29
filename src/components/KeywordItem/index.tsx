import { Box, IconButton, Stack, Typography } from "@mui/material";
import BlockIcon from '@mui/icons-material/Block';
import AddTaskIcon from '@mui/icons-material/AddTask';

export interface IKeyword {
	id: string,
	content: string,
	is_blocked: boolean,
	is_subscribed: boolean,
}

export interface IKeywordController {
	changeKeywordUserPreferences: (id: string, is_blocked: boolean, is_subscribed: boolean) => void,
}

export function KeywordItem(props: { data: IKeyword, controller: IKeywordController }) {
	return (
		<Box>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Stack direction="row">
					<Typography variant="body2" component="h5">{props.data.content}</Typography>
				</Stack>
				<Stack direction="row">
					<IconButton
						onClick={() => props.controller.changeKeywordUserPreferences(
							props.data.id,
							!props.data.is_blocked,
							false)}>
						<BlockIcon sx={{ color: props.data.is_blocked ? '#DE6767' : '' }}></BlockIcon>
					</IconButton>
					<IconButton
						onClick={() => props.controller.changeKeywordUserPreferences(
							props.data.id,
							false,
							!props.data.is_subscribed)}>
						<AddTaskIcon sx={{ color: props.data.is_subscribed ? '#86D586' : '' }}></AddTaskIcon>
					</IconButton>
				</Stack>
			</Stack>
		</Box >
	);
};
