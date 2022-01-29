import LoginButton from "../../components/LoginButton";
import { MyProfileCard } from "../../components/MyProfileCard";
import { ProfilePreviewCard } from "../../components/ProfilePreviewCard";
import "./index.css";

// export react function render
export default function Jerry() {

	let user = {
		name: "Giorgio",
		bio: "My name is Giovanni Giorgio, but everybody calls me Giorgio",
		created_at: "2020-01-01",
		updated_at: "2020-01-01",
		avatar: "https://source.unsplash.com/random/400x200",
		uuid: "123",
		subscribed_keywords: ["react", "typescript", "javascript"]
	};


	return (
		<div style={{paddingLeft: '800px'}}>
			<ProfilePreviewCard data={user}></ProfilePreviewCard>
			<MyProfileCard data={user}></MyProfileCard>
			<br/>
			<LoginButton></LoginButton>
		</div>
	);
}