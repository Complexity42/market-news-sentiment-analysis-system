import { Link } from "react-router-dom";
import "./index.css";
import { observer } from "mobx-react";
import CounterStore from "../../mobx/CounterStore";
import { Container, Stack } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import { CommentCard } from "../../components/CommentCard";
import { KeywordItem } from "../../components/KeywordItem";
import LoginButton from "../../components/LoginButton";
import { MyProfileCard } from "../../components/MyProfileCard";
import { ProfilePreviewCard } from "../../components/ProfilePreviewCard";
import { Title } from "../../components/Title";

const LandingPage = observer(() => {
	let user = {
		name: "Giorgio",
		bio: "My name is Giovanni Giorgio, but everybody calls me Giorgio",
		created_at: "2020-01-01",
		updated_at: "2020-01-01",
		avatar: "https://source.unsplash.com/random/400x200",
		uuid: "123",
		subscribed_keywords: ["react", "typescript", "javascript"]
	};

	let comment = {
		updated_at: "2022-1-19 11:45",
		news_title: "【美股收市】蘋果績優飆7% 帶動道指倒升564點 納指彈逾3%",
		news_id: "123",
		news_source_url: "https://www.google.com",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	}

	let keyword_c = {
		id: "react",
		content: 'React',
		is_blocked: false,
		is_subscribed: true
	}

	// usestate keyword
	const [keyword, setKeyword] = useState(keyword_c);

	let controller = {
		changeKeywordUserPreferences: (id: string, is_blocked: boolean, is_subscribed: boolean) => {
			setKeyword({
				...keyword,
				is_blocked: is_blocked,
				is_subscribed: is_subscribed
			});
		}
	}

	return (

		<div>
			<Container>
				<Stack direction="row" sx={{ backgroundColor: 'white', height: '100vh', pt: '2rem' }} justifyContent="center">
					<Container
						className="landing-page-container"
						sx={{
							backgroundColor: 'white'
						}}>
						<MyProfileCard data={user}></MyProfileCard>
					</Container>
					<Container
						className="landing-page-container"
						sx={{ backgroundColor: 'white' }}>
						<Title title="Profile" show_all>
							<MyProfileCard data={user}></MyProfileCard>
						</Title>
						<Title title="Subscribed" show_all>
							<Card sx={{ minWidth: 275, maxWidth: 500, borderRadius: '0.5rem' }} elevation={4}>
								<CardContent sx={{ p: '0.6rem 0.5rem 0.6rem 1.4rem !important' }}>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
								</CardContent>
							</Card>
						</Title>
						<Title title="Not Interested" show_all>
							<Card sx={{ minWidth: 275, maxWidth: 500, borderRadius: '0.5rem' }} elevation={4}>
								<CardContent sx={{ p: '0.6rem 0.5rem 0.6rem 1.4rem !important' }}>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
								</CardContent>
							</Card>
						</Title>
						<Title title="Suggestion" show_all>
							<Card sx={{ minWidth: 275, maxWidth: 500, borderRadius: '0.5rem' }} elevation={4}>
								<CardContent sx={{ p: '0.6rem 0.5rem 0.6rem 1.4rem !important' }}>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
									<KeywordItem data={keyword} controller={controller}></KeywordItem>
								</CardContent>
							</Card>
						</Title>
					</Container>
				</Stack>
			</Container >
		</div >
		// <div className="landing-container">
		// 	it is landing page.

		// 	<div>
		// 		go to <Link to="/profile">PROFILE</Link>.
		// 	</div>

		// 	<div>
		// 		go to <Link to="/demo-list">DEMO</Link>.
		// 	</div>

		// 	<div>
		// 		go to <Link to="/template-list">TEMPLATE</Link>.
		// 	</div>

		// 	<div>
		// 		go to <Link to="/form">FORM</Link>.
		// 	</div>

		// 	<div>
		// 		go to <Link to="/todo">TODO</Link>.
		// 	</div>

		// 	<div>
		// 		go to <Link to="/cross">CROSS</Link>.
		// 	</div>

		// 	<div>
		// 		go to <Link to="/rest">REST</Link>.
		// 	</div>
		// </div>
	);
});

export default LandingPage;
