import Card from "@mui/material/Card";
import { ICommentProps } from "../Comment";
import Comment from "../Comment";
import { Comment as CommentType} from "../../types/Comment";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List"
import CommentInputField from "../CommentInputField";

interface ICommentSectionCardProps {
    // for comment
    news_id: string;
    comments: CommentType[];
}

const CommentSectionCard = (props: ICommentSectionCardProps) => {

    const comments = props.comments?.map(e => <Comment 
        author_name={e.created_by.slice(0, 5)}
        content={e.content}
        created_at={e.created_at}
        likes={0}
    />) || [];

    return (
        <Card sx={{ borderRadius: ".5rem" }} elevation={4}>
            <CommentInputField news_id={props.news_id} />

            <Divider/>

            <List sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: "50vh", overflowY: "auto" }}>
                {
                   !!comments.length && comments.reduce((acc, cur) => (
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
