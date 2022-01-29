import { Link } from "react-router-dom";
import "./index.css";
import { observer } from "mobx-react";
import CounterStore from "../../mobx/CounterStore";
import { Backdrop, Button, Container, Paper, Stack } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
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
import { collection, query, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { News } from "../../types/News";
import { ConstructionOutlined } from "@mui/icons-material";


const LandingPage = observer(() => {
	const auth = useMemo(() => getAuth(), []);
	const [userProfile, loading, error] = useAuthState(auth);

	const db = useMemo(() => getFirestore(), []);
	const collectionRef = useMemo(() => collection(db, 'News'), []);
	const [news, isNewsLoading, isNewsError] = useCollectionData(query(collectionRef), {idField: 'id'});

	// user state
	const [user, setUser] = useState<IProfile>({
		name: "Giorgio",
		bio: "My name is Giovanni Giorgio, but everybody calls me Giorgio",
		created_at: "2020-01-01",
		updated_at: "2020-01-01",
		avatar: "https://source.unsplash.com/random/400x200",
		uuid: "123",
		subscribed_keywords: [],
		filtered_keywords: []
	});

	// keywords state
	const [keywords, setKeywords] = useState<{ [Key: string]: string }>({
		react: "React",
		typescript: "Typescript",
		javascript: "Javascript"
	});

	async function CreateAccount(user: User) {
		let ee = await getDoc(doc(db, "User", user.uid));
		let userData = ee.data();
		if (userData == undefined) {
			const send = {
				name: user.displayName,
				bio: 'A new user',
				created_at: user.metadata.creationTime,
				update_at: user.metadata.lastSignInTime,
				avatar: user.photoURL,
				subscribed_keywords: ['react', 'typescript', 'javascript'],
				filtered_keywords: [],
				uuid: user.uid
			};
			await setDoc(doc(db, "User", user.uid), send);
			ee = await getDoc(doc(db, "User", user.uid));
			userData = ee.data();
		}

		if (userData == undefined) return;

		setUser(userData as IProfile);
	};

	async function GetKeywords() {
		const querySnapshot = await getDocs(collection(db, "Keywords"));

		let local_keywords: { [Key: string]: string } = {};
		querySnapshot.forEach((doc: { id: string; data: () => any; }) => {
			local_keywords[doc.id] = doc.data().keyword;
		});

		setKeywords(local_keywords);
	}

	useEffect(() => { // firestore to local
		if (userProfile) {
			CreateAccount(userProfile);
			GetKeywords();
		}
	}, [userProfile]);

	useEffect(() => { // sync to firestore
		if (userProfile && userProfile.uid == user.uuid) setDoc(doc(db, "User", userProfile.uid), user);
	}, [user]);

	useEffect(() => { // sync to firestore
		// console.log(keywords);
	}, [keywords]);

	let comment = {
		updated_at: "2022-1-19 11:45",
		news_title: "【美股收市】蘋果績優飆7% 帶動道指倒升564點 納指彈逾3%",
		news_id: "123",
		news_source_url: "https://www.google.com",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	}
	
	let controller = {
		changeKeywordUserPreferences: (id: string, is_blocked: boolean, is_subscribed: boolean) => {
			setUser((prev) => {
				let new_user = { ...prev };

				new_user.subscribed_keywords = new_user.subscribed_keywords.filter(x => x != id);
				new_user.filtered_keywords = new_user.filtered_keywords.filter(x => x != id);

				if (is_blocked) {
					new_user.filtered_keywords.push(id);
				}

				if (is_subscribed) {
					new_user.subscribed_keywords.push(id);
				}
				return new_user;
			});
		}
	}

	const previousState = useRef<News[]>();

	useEffect(() => {
		if (news) {
			if (news.length > (previousState?.current?.length || 0)) {
				console.log("something updated.");
			}

			previousState.current = news as any;
		}
	}, [news]);

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
						{
							news && news.map((e) => (
								<NewsCard
									news_id={e.id}
									title={e.title}
									content={e.content}
									source_date={e.source_date}
									source_url={e.source_url}
									source_icon_url="https://source.unsplash.com/random/400x200"
									source_name={e.source_name}
									keywords={e.keywords}
								/>
							))
						}
					</Container>
					<Container
						className="landing-page-container"
						sx={{ backgroundColor: 'white' }}>
						<Title title="Profile" show_all>
							<MyProfileCard data={user}></MyProfileCard>
						</Title>
						<Title title="Subscribed" show_all can_hide>
							<Card sx={{ minWidth: 275, maxWidth: 500, borderRadius: '0.5rem' }} elevation={4}>
								<CardContent sx={{ p: '0.6rem 0.5rem 0.6rem 1.4rem !important' }}>
									{
										user.subscribed_keywords.map(id => {
											let content: string = keywords[id];
											return (
												<KeywordItem key={id} data={{ id, content, is_blocked: false, is_subscribed: true }} controller={controller}></KeywordItem>
											)
										})
									}
								</CardContent>
							</Card>
						</Title>
						<Title title="Not Interested" show_all can_hide>
							{/* show_all={!!user.filtered_keywords.length}  */}
							<Card sx={{ minWidth: 275, maxWidth: 500, borderRadius: '0.5rem' }} elevation={4}>
								<CardContent sx={{ p: '0.6rem 0.5rem 0.6rem 1.4rem !important' }}>
									{
										user.filtered_keywords.map(id => {
											let content: string = keywords[id];
											return (
												<KeywordItem key={id} data={{ id, content, is_blocked: true, is_subscribed: false }} controller={controller}></KeywordItem>
											)
										})
									}
								</CardContent>
							</Card>
						</Title>
						<Title title="Suggestion" show_all can_hide>
							<Card sx={{ minWidth: 275, maxWidth: 500, borderRadius: '0.5rem' }} elevation={4}>
								<CardContent sx={{ p: '0.6rem 0.5rem 0.6rem 1.4rem !important' }}>
									{
										Object
											.keys(keywords)
											.filter(id => !(user.filtered_keywords.includes(id) || user.subscribed_keywords.includes(id)))
											.map(id => {
												let content: string = keywords[id];
												return (
													<KeywordItem key={id} data={{ id, content, is_blocked: false, is_subscribed: false }} controller={controller}></KeywordItem>
												)
											})
									}
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
