import React, { createContext, useState, useMemo } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [usersList, setUsersList] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	const [gamesList, setGamesList] = useState([]);
	const [seletedGame, setSelectedGame] = useState(null);

	const updateUsersList = (users) => {
		setUsersList(users);
	};
	const updateSelectedUser = (user) => {
		setSelectedGame(user);
	};

	const updateGamesList = (games) => {
		setGamesList(games);
	};
	const updateSelectedGame = (game) => {
		setSelectedUser(game);
	};

	const contextValue = useMemo(
		() => ({
			usersList,
			updateUsersList,
			selectedUser,
			updateSelectedUser,
			gamesList,
			updateGamesList,
			seletedGame,
			updateSelectedGame,
		}),
		[usersList, selectedUser, gamesList, seletedGame]
	);

	return (
		<DataContext.Provider value={contextValue}>
			{children}
		</DataContext.Provider>
	);
};
