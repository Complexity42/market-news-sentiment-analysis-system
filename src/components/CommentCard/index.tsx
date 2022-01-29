import { Card, CardContent, Typography } from "@mui/material";

export interface ICommentCard {
	content: string,
	news_title: string,
	news_id: string,
	news_source_url: string
	updated_at: string,
}

export function CommentCard(props: { data: ICommentCard }) {
	return (
		<Card sx={{ minWidth: 275, maxWidth: 500, borderRadius: '0.5rem' }} elevation={4}>
			<CardContent sx={{ p: '1rem !important' }}>
				<Typography 
					variant="body2"
					component="h5"
					sx={{ mb: '1rem', color: 'gray', "&:hover": { color: 'dodgerblue', cursor: 'pointer' } }}
					onClick={() => {
						window?.open(props.data.news_source_url, '_blank')?.focus();
					}} >{props.data.news_title}</Typography>
				<Typography variant="body1" component="h5" sx={{ mb: '0.5rem' }}>{props.data.content}</Typography>
				<Typography variant="body1" component="h5" sx={{ mb: '-0.3rem', color: 'gray' }}>{props.data.updated_at}</Typography>
			</CardContent>
		</Card>
	);
};
