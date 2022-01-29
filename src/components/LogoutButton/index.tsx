import { getAuth, signOut, User } from "firebase/auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const LogoutButton = () => {
	const auth = useMemo(getAuth, []);
	const [user, loading, error] = useAuthState(auth);

	const onClick = useCallback(() => {
		signOut(auth);
	}, [auth]);

	if (loading) {
		return (
			<span>loading...</span>
		);
	}

	if (!user) {
		return (
			<span>
				you are not logged in yet.
			</span>
		);
	}

	return (
		<input type="button" value="it is a logout button." onClick={onClick}/>
	);
}

export default LogoutButton;
