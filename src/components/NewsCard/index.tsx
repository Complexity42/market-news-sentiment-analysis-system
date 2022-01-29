import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useMemo } from "react";
import Tag from "../../components/Tag";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from '@mui/icons-material/AddComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Divider from "@mui/material/Divider";

interface INewsCardProps {

    // for passing the reference for rating and bookmarking.
    news_id: string;

    title: string;

    description: string;

    date: string;

    source_url: string;

    source_icon_url: string;

    source_name: string;

}

const NewsCard = (props: INewsCardProps) => {

    const keywords = "amet sequi deleniti quam explicabo quia unde necessitatibus saepe labore rerum".split(" ");

    const tags = useMemo(() => {
        return keywords.map(e => <Tag label={e} />);
    }, [keywords]);

    return (
        <a href={props.source_url} style={{ textDecoration: "unset" }}>
            <Card sx={{ minWidth: 275, maxWidth: 500, borderLeft: ".7rem solid #88cc88", borderRadius: ".5rem" }
            } elevation={4} >
                <CardContent>
                    <Typography sx={{ fontWeight: 600 }}>
                        {props.title}
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        {props.date}
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

                <Divider sx={{ my: "1rem" }}></Divider>

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
                            <IconButton>
                                <AddCommentIcon />
                            </IconButton>
                            <IconButton>
                                <BookmarkIcon />
                            </IconButton>
                            <IconButton>
                                <FilterAltIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </CardActions>
            </Card >
        </a >
    );
}

export default NewsCard;