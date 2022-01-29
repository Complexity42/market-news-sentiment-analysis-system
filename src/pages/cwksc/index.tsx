import Container from "@mui/material/Container";
import "./index.css";
import SearchBar from "../../components/SearchBar";

const CwkscPage = () => {
    return (
        <Container sx={{ p: "64px" }} >
            <SearchBar />
        </Container>
    );
}

export default CwkscPage;

