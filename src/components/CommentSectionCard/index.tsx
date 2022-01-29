import Card from "@mui/material/Card";
import { ICommentProps } from "../Comment";
import Comment from "../Comment";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List"
import CommentInputField from "../CommentInputField";

interface ICommentSectionCardProps {
    // for comment
    news_id: string;
    comments: ICommentProps[];
}

const CommentSectionCard = (props: ICommentSectionCardProps) => {

    const comments = props.comments.map(e => <Comment {...e} />);

    return (
        <Card sx={{ borderRadius: ".5rem" }} elevation={4}>
            <CommentInputField />

            <Divider/>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', maxHeight: "50vh", overflowY: "auto" }}>
                {
                    comments.reduce((acc, cur) => (
                        <>
                            {acc}
                            <Divider/>
                            {cur}
                        </>
                    ))
                }
            </List>
        </Card>
    );
}

export default CommentSectionCard;
