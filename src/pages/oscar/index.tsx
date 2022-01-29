import NewsCard from "../../components/NewsCard";
import Container from "@mui/material/Container";
import "./index.css";

const OscarPage = () => {
    return (
        <div className="oscar-page">
            <Container>
                <NewsCard
                    news_id="random_id"
                    title="John Doe Antler"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur repellat officia adipisci earum soluta, qui cumque cum odit neque in quasi aut delectus praesentium esse similique eaque corrupti incidunt eligendi!"
                    source_date="4 hours ago"
                    source_url="www.google.com"
                    source_icon_url="https://source.unsplash.com/random/400x200"
                    source_name="John Doe"
                    keywords={["pardun", "peko", "nanora"]}
                 />
            </Container>
        </div>
    );
} 

export default OscarPage;