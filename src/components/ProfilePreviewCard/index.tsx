import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";

export interface IProfile {
	name: string,
	bio: string,
	created_at: string,
	updated_at: string,
	avatar: string,
	uuid: string,
	subscribed_keywords: string[]
};

export function ProfilePreviewCard(props: {data: IProfile}) {
	return (
		<Card sx={{ minWidth: 275, maxWidth: 500, borderRadius: '0.5rem' }} elevation={4}>
			<CardContent sx={{ p: '1rem !important' }}>
				<Stack direction="row" spacing={2}>
					<Avatar alt="Hi" sx={{ width: '7rem', height: '7rem' }} src={props.data.avatar} />
					<Stack direction="column" justifyContent="flex-start">
						<Typography variant="h5" component="h4" sx={{ mb: '0.5rem' }}>{props.data.name}</Typography>
						<Typography variant="body1" component="p" sx={{ color: 'darkgrey', lineHeight: '1rem' }}>{props.data.bio}</Typography>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};
