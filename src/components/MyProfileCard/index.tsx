import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Stack, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import { getAuth, signOut, User } from "firebase/auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IProfile } from "../ProfilePreviewCard";

export function MyProfileCard(props: { data: IProfile }) {
	const auth = useMemo(getAuth, []);
	const [user, loading, error] = useAuthState(auth);

	const onClick = useCallback(() => {
		signOut(auth);
	}, [auth]);

	if (loading) {
		return (
			<span>loading...</span>
		);
	}

	if (!user) {
		return (
			<span>
				you are not logged in yet.
			</span>
		);
	}


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
				<Stack direction="row" spacing={2} justifyContent="right">
					<Button variant="contained" onClick={onClick}>Logout</Button>
				</Stack>

			</CardContent>
		</Card>
	);
};
