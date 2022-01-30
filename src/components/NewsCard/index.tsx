import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useCallback, useEffect, useMemo } from "react";
import Tag from "../../components/Tag";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { ICommentProps } from "../Comment";
import CommentSectionCard from "../CommentSectionCard";
import { where } from "firebase/firestore";
import { collection, query, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface INewsCardProps {
    // for passing the reference for rating and bookmarking.
    news_id: string;
    title: string;
    content: string;
    keywords: string[];
    source_date: string;
    source_url: string;
    source_icon_url: string;
    source_name: string;
    is_positive: boolean;
    summary: string;
}

const NewsCard = (props: INewsCardProps) => {

	const firestore = useMemo(() => getFirestore(), []);
	const collectionRef = useMemo(() => collection(firestore, 'Comments'), []);
	const [comments, loading, error] = useCollectionData(query(collectionRef, where("news_id", "==", props.news_id)), {idField: 'id'});

    const [isShowingCommentSection, setShowingCommentSection] = useState<boolean>(false);

    const tags = useMemo(() => {
        return props.keywords.map(e => <Tag label={e} />);
    }, [props.keywords]);

    const toggleCommentSection = useCallback((e: MouseEvent) => {
        setShowingCommentSection(!isShowingCommentSection);
    }, [isShowingCommentSection]);

    const [isBookmarkActive, setBookmarkActive] = useState(false);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ maxWidth: "500px;", mb: '1.7rem' }}>
            <Stack flexDirection="column" rowGap="1rem" alignItems="flex-end">
                <Card sx={{ borderLeft: ".7rem solid " + (props.is_positive ? "#88cc88" : "#cc8888"), borderRadius: ".5rem", width: "100%" }} elevation={4} >
                    <a href={props.source_url} style={{ textDecoration: "unset", color: "black" }} target="_blank">
                        <CardContent>
                            <Typography sx={{ fontWeight: 600 }}>
                                {props.title}
                            </Typography>
                            

                            <Typography variant="body1" color="text.secondary">
                                {props.source_date}
                            </Typography>

                            <Box sx={{ my: "1rem" }}></Box>
                            

                            <Typography color="text.secondary">
                                {props.summary || props.content.length > 200 ? props.content.slice(0,200) + "..." : props.content}
                            </Typography>

                            <Stack columnGap=".5rem" rowGap=".5rem" flexWrap="wrap" flexDirection="row" sx={{ mt: ".5rem" }}>
                                {
                                    tags
                                }
                            </Stack>
                        </CardContent>
                    </a>

                    <Divider sx={{ mt: '0.7rem', mb: "0rem" }}></Divider>

                    <CardActions>
                        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                            <Stack flexDirection="row" alignItems="center" sx={{ pl: ".5rem" }} columnGap=".5rem">
                                <Avatar
                                    alt="Travis Howard"
                                    src={props.source_icon_url}
                                    sx={{
                                        width: "1.5rem",
                                        height: "1.5rem",
                                    }}
                                />

                                <Typography>
                                    {
                                        props.source_name
                                    }
                                </Typography>
                            </Stack>

                            <Stack flexDirection="row" columnGap=".5rem">
                                <IconButton onClick={(e) => toggleCommentSection(e as any)}>
                                    {isShowingCommentSection ? (
                                        <ModeCommentIcon color="primary"/>
                                    ): (
                                        <AddCommentOutlinedIcon />
                                    )}
                                </IconButton>
                                <IconButton onClick={() => setBookmarkActive(!isBookmarkActive)}>
                                    {
                                        isBookmarkActive ?  <BookmarkIcon color="primary"/> : <BookmarkBorderOutlinedIcon />
                                    }
                                </IconButton>
                                <IconButton onClick={handleClick}>
                                    {
                                        open ?  <FilterAltOutlinedIcon color="primary"/> : <FilterAltOutlinedIcon/>
                                    }
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Not interested</MenuItem>
                                    <MenuItem onClick={handleClose}>Share</MenuItem>
                                </Menu>
                            </Stack>
                        </Stack>
                    </CardActions>
                </Card >

                {
                    isShowingCommentSection && <Box sx={{ width: "90%"}}>
                        <CommentSectionCard news_id={props.news_id} comments={comments as any } />
                    </Box>
                }
            </Stack>
        </Box> 
    );
}

export default NewsCard;