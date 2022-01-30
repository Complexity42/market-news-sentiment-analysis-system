import Card from "@mui/material/Card";
import { ICommentProps } from "../Comment";
import Comment from "../Comment";
import { Comment as CommentType} from "../../types/Comment";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List"
import CommentInputField from "../CommentInputField";
import { observer } from "mobx-react";
import UserStore from "../../mobx/UserStore";
import { useEffect, useMemo } from "react";

interface ICommentSectionCardProps {
    // for comment
    news_id: string;
    comments: CommentType[];
}

const CommentSectionCard = observer((props: ICommentSectionCardProps) => {

    useEffect(() => {
        console.log(UserStore.users);
    }, [UserStore.users]);

    const comments = props.comments?.map(e => {
        const user = UserStore.users.find(i => i.id == e.created_by);
        return (
            <Comment 
                author_name={user?.name || "John Doe"}
                icon_url={user?.avatar || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"}
                content={e.content}
                created_at={e.created_at}
                likes={0}
            />
        );
    }) || [];

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
});

export default CommentSectionCard;
