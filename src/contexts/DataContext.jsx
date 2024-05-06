// DataContext.js
import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [usersList, setUsersList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const [gamesList, setGamesList] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);

    const updateUsersList = (users) => {
        setUsersList(users);
    };
    const updateSelectedUser = (user) => {
        setSelectedUser(user);
    };

    const updateGamesList = (games) => {
        setGamesList(games);
    };
    const updateSelectedGame = (game) => {
        setSelectedGame(game);
    };

    const contextValue = useMemo(
        () => ({
            usersList,
            updateUsersList,
            selectedUser,
            updateSelectedUser,
            gamesList,
            updateGamesList,
            selectedGame,
            updateSelectedGame,
        }),
        [usersList, selectedUser, gamesList, selectedGame]
    );

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

// Add prop validation for children
DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
