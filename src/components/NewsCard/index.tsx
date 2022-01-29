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

interface INewsCardProps {
    // for passing the reference for rating and bookmarking.
    news_id: string;
    title: string;
    description: string;
    keywords: string[];
    source_date: string;
    source_url: string;
    source_icon_url: string;
    source_name: string;
}

const NewsCard = (props: INewsCardProps) => {

    const [ comments, setComments ] = useState<ICommentProps[]>([]);

    useEffect(() => {
        setComments([
            {
                author_name: "John Doe Antler",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis, eos provident saepe dolor dolore eligendi placeat alias vel quia voluptates sed quaerat delectus fugit dolores a sit modi labore.",
                likes: 231,
                created_at: "3 hours ago",
            }, {
                author_name: "Jane Doe Antill",
                content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab, earum saepe unde optio nisi quas dolores? Nihil asperiores nemo vel similique maxime vero voluptate id voluptatem eius saepe! Molestiae!",
                likes: 71,
                created_at: "1 hours ago",
            }, {
                author_name: "Sawa Lai",
                content: "quo culpa eligendi earum numquam veniam totam quas, ratione atque, autem mollitia beatae ut alias adipisci laboriosam dolore accusantium rerum blanditiis.",
                likes: 71,
                created_at: "1 hours ago",
            }
        ]);
    }, []);

    const [isShowingCommentSection, setShowingCommentSection] = useState<boolean>(false);

    const tags = useMemo(() => {
        return props.keywords.map(e => <Tag label={e} />);
    }, [props.keywords]);

    const toggleCommentSection = useCallback((e: MouseEvent) => {
        setShowingCommentSection(!isShowingCommentSection);
    }, [isShowingCommentSection]);

    return (
        <Box sx={{ maxWidth: "500px;", mb: '1.7rem' }}>
            <Stack flexDirection="column" rowGap="1rem" alignItems="flex-end">
                <Card sx={{ borderLeft: ".7rem solid #88cc88", borderRadius: ".5rem" }} elevation={4} >
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
                                {props.description}
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
                                <IconButton>
                                    <BookmarkBorderOutlinedIcon />
                                </IconButton>
                                <IconButton>
                                    <FilterAltOutlinedIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </CardActions>
                </Card >

                {
                    isShowingCommentSection && <Box sx={{ width: "90%"}}>
                        <CommentSectionCard news_id={props.news_id} comments={comments} />
                    </Box>
                }
            </Stack>
        </Box> 
    );
}

export default NewsCard;