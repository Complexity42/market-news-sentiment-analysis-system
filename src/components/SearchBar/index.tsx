import "./index.css";

import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import CounterStore from '../../mobx/CounterStore';
import { observer } from "mobx-react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from '@mui/icons-material/AddComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/material/styles";
import SearchStore from "../../mobx/SearchStore";
import { useRef } from "react";

const CardContentStyled = styled(CardContent)(`
  padding: 8px;
  &:last-child {
    padding-bottom: 8px;
  }
`);

const SearchBar = () => {

	const timer = useRef<number>();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (timer.current) {
			clearTimeout(timer.current);
		}
		const value = e.currentTarget.value;
		timer.current = setTimeout(() => {
			SearchStore.setFilter(value);
		}, 500) as any as number;
	}

	return (
		<Card sx={{ minWidth: 128, maxWidth: 500, borderRadius: '.5rem', marginBottom: '1.7rem' }}>
			<CardContentStyled >
				<Stack flexDirection="row" alignItems="center" columnGap=".5rem">
					<SearchIcon sx={{ml: '0.6rem'}} />
					<TextField label="" fullWidth variant="standard" sx={{ mr: '1rem', ml: '0.5rem' }} onChange={onChange}/>
				</Stack>
			</CardContentStyled>
		</Card>
	);
};

export default SearchBar;
