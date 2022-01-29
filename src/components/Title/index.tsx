import { Stack, Typography } from "@mui/material";
import { useState } from "react";

export function Title(props: { title: string, show_all: boolean, children: React.ReactNode, can_hide?: boolean }) {
	const [show_all, setShowAll] = useState(props.show_all);
	return (
		<div style={{ marginBottom: '1.7rem' }}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ mb: '1rem', minWidth: 275, maxWidth: 500 }}>
				<Typography variant="h5" component="h5" sx={{ width: '2.5rem', borderBottom: 'solid #CCC 1px', lineHeight: '0.1rem' }}></Typography>
				<Typography variant="h5" component="h5" sx={{ ml: '0.7rem', mr: '0.7rem', }}>{props.title}</Typography>
				<Typography variant="h5" component="h5" flexGrow="1" sx={{ borderBottom: 'solid #CCC 1px', lineHeight: '0.1rem' }}></Typography>
				{ props.can_hide ? <Typography
					variant="body2"
					component="h5"
					sx={{ ml: '0.5rem', "&:hover": { color: 'dodgerblue', cursor: 'pointer' } }}
					onClick={() => setShowAll(!show_all)}>
					{show_all ? 'Hide all' : 'Show all'}
				</Typography> : null }
			</Stack>
			{show_all ? props.children : null}
		</div>
	);
};
