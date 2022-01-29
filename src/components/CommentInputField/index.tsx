import { useState } from "react";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const CommentInputField = () => {

    const [isFocus, setFocus] = useState(false);

    const [comment, setComment] = useState("");

    const onSend = () => {
        console.log("comment should sent. content:", comment)
        setComment("");
    }

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt="default user icon" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" />
            </ListItemAvatar>

            <ListItemText>
                <ClickAwayListener onClickAway={() => setFocus(false)}>
                    <Stack flexDirection="row" rowGap=".5rem">
                        <TextField
                            id="standard-search"
                            label="Add a new comment"
                            type="text"
                            variant="standard"
                            onFocus={() => setFocus(true)}
                            value={comment}
                            onChange={(e) => setComment(e.currentTarget.value)}
                            fullWidth
                        />

                        {
                            isFocus && !!comment.length && (
                                <IconButton onClick={onSend}>
                                    <Send />
                                </IconButton>
                            )
                        }
                    </Stack>
                </ClickAwayListener>
            </ListItemText>
        </ListItem>
    );
}

export default CommentInputField;