// let try if I can get all the existing users and use them as sign in - sign out

import React from 'react';

export const UserContext = React.createContext({ user: {} });

export const UserProvider = ({ children }) => {
	const [user, setUser] = React.useState(
		localStorage.getItem('grumpy19') || null
	);
	return (
		<UserContext.Provider value={[user, setUser]}>
			{children}
		</UserContext.Provider>
	);
}
