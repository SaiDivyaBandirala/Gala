import React, { useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Theme from "./assets/styles/Theme.json";
import SevensGame from "./pages/SevensGame";
import { DataContext } from "./contexts/DataContext";
import { getUsersList } from "./api/Api";
import { getGamesList } from "./api/Games/getGamesList";
import GamesListPage from "./pages/GamesList";
import Routes from "./Routes";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
const theme = createTheme(Theme);

function App() {
    const { updateUsersList, updateGamesList } = useContext(DataContext);

    const getUsers = async () => {
        try {
            const data = await getUsersList();
            updateUsersList(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getGames = async () => {
        try {
            const data = await getGamesList();
            updateGamesList(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getUsers();
        getGames();
    }, []);

    return (
        <Router>
            <Auth0ProviderWithNavigate>
                <ThemeProvider theme={theme}>
                    <Routes />
                </ThemeProvider>
            </Auth0ProviderWithNavigate>
        </Router>
    );
}

export default App;
