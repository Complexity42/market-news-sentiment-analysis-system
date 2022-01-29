import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup, User } from "firebase/auth";
import { useCallback, useEffect, useMemo, useState } from "react";

const LoginButton = () => {

	// init the auth object once
	const auth = useMemo(() => getAuth(), []);
	const provider = useMemo(() => new GoogleAuthProvider(), []);

	const [user, loading, error] = useAuthState(auth);

	const onClick = useCallback(() => {
		signInWithPopup(auth, provider);
	}, [auth, provider]);

	if (loading) {
		return (
			<span>loading...</span>
		);
	}

	if (user) {
		return (
			<span>
				logged in as: {user.displayName}.
			</span>
		);
	}

	return (
		<input type="button" value="it is a login button." onClick={onClick}/>
	);
}

export default LoginButton;
