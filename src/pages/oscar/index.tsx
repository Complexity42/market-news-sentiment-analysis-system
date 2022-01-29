import NewsCard from "../../components/NewsCard";
import Container from "@mui/material/Container";
import "./index.css";

const OscarPage = () => {
    return (
        <div className="oscar-page">
            <Container>
                <NewsCard />
            </Container>
        </div>
    );
} 

export default OscarPage;