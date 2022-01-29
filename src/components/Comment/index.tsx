import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import IconButton from "@mui/material/IconButton";

export interface ICommentProps {
    author_name: string;
    content: string;
    likes: number;
    created_at: string;
}

const Comment = (props: ICommentProps) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="default user icon" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
            </ListItemAvatar>

            <ListItemText
                primary={
                    <Stack flexDirection="row" columnGap=".5rem" alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                            {props.author_name}
                        </Typography>
                        <div>
                            •
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            {props.created_at}
                        </Typography>
                    </Stack>
                }
                secondary={
                    <Stack flexDirection="column" rowGap="1rem">
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {props.content}
                        </Typography>

                        <Stack flexDirection="row" alignItems="center" sx={{ marginLeft: "-0.5rem"}}>
                            <IconButton>
                                <ThumbUpAltOutlinedIcon sx={{ width: "1rem", height: "1rem"}} />
                            </IconButton>

                            <Typography variant="body2">
                                {props.likes}
                            </Typography>
                        </Stack>
                    </Stack>
                }
            />
        </ListItem>
    );
}

export default Comment;
