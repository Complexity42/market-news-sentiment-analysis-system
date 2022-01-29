import Chip from "@mui/material/Chip";
import "./index.css";

interface ITagProps {
    label: string;
}

const Tag = (props: ITagProps) => {
    return (
        <Chip className="tag-box-shadow" label={props.label} sx={{
            backgroundColor: "unset",
        }}/>
    );
}

export default Tag;
