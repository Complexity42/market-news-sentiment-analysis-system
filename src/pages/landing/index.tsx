import { Link } from "react-router-dom";
import "./index.css";
import { observer } from "mobx-react";
import CounterStore from "../../mobx/CounterStore";
import { Backdrop, Button, Container, Paper, Stack } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { CommentCard } from "../../components/CommentCard";
import { KeywordItem } from "../../components/KeywordItem";
import LoginButton from "../../components/LoginButton";
import { MyProfileCard } from "../../components/MyProfileCard";
import { IProfile, ProfilePreviewCard } from "../../components/ProfilePreviewCard";
import { Title } from "../../components/Title";
import NewsCard from "../../components/NewsCard";
import SearchBar from "../../components/SearchBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, User } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";


const LandingPage = observer(() => {
	const auth = useMemo(() => getAuth(), []);
	const [userProfile, loading, error] = useAuthState(auth);
	const db = getFirestore();

	// user state
	const [user, setUser] = useState<IProfile>({
		name: "Giorgio",
		bio: "My name is Giovanni Giorgio, but everybody calls me Giorgio",
		created_at: "2020-01-01",
		updated_at: "2020-01-01",
		avatar: "https://source.unsplash.com/random/400x200",
		uuid: "123",
		subscribed_keywords: ["react", "typescript", "javascript"],
		filtered_keywords: []
	});

	async function CreateAccount(user: User) {
		let ee = await getDoc(doc(db, "User", user.uid));

		if (ee.data() == undefined) {
			const send = {
				Name: user.displayName,
				Description: 'A new user',
				Created_At: user.metadata.creationTime,
				Update_At: user.metadata.lastSignInTime,
				Subscribed_Keywords: ['react', 'typescript', 'javascript'],
				filtered_keywords: [],
			};
			await setDoc(doc(db, "User", user.uid), send);
			ee = await getDoc(doc(db, "User", user.uid));
		}

		setUser({
			name: user.displayName || '',
			bio: ee.data()?.description || '',
			created_at: ee.data()?.ceated_at || '',
			updated_at: ee.data()?.update_at || '',
			avatar: user.photoURL || '',
			uuid: user.uid || '',
			subscribed_keywords: ee.data()?.subscribed_keywords || [],
			filtered_keywords: ee.data()?.filtered_keywords || [],
		});
	};

	useEffect(() => {
		if (userProfile) CreateAccount(userProfile);
	}, [userProfile]);

	// let user = {
	// 	name: userProfile?.displayName,
	// 	bio: "My name is Giovanni Giorgio, but everybody calls me Giorgio",
	// 	created_at: "2020-01-01",
	// 	updated_at: "2020-01-01",
	// 	avatar: "https://source.unsplash.com/random/400x200",
	// 	uuid: "123",
	// 	subscribed_keywords: ["react", "typescript", "javascript"],
	// 	filtered_keywords: []
	// };

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
						<SearchBar />
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
			</Container>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={userProfile == null}
			>
				<Paper>
					<LoginButton></LoginButton>
				</Paper>
			</Backdrop>
		</div >
	);
});

export default LandingPage;
