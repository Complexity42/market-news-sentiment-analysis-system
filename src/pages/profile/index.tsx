import "./index.css";

import { getAuth, User } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfilePage = () => {
	const auth = useMemo(() => getAuth(), []);
	const [user, loading, error] = useAuthState(auth);

	if (loading) {
		return (
			<div className="profile-container">
				loading...
			</div>
		)
	}

	if (!user) {
		return (
			<div className="profile-container">
				you are not logged in;
			</div>
		);
	}

	return (
		<div className="profile-container">
			<div className="profile-image">
				<img src={user.photoURL || ""} alt="" />
			</div>

			<div className="profile-name">
				name: {user.displayName}
			</div>
		</div>
	);
}

export default ProfilePage;