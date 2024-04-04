import React, { useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Theme from "./assets/styles/Theme.json";
import SevensGame from "./pages/SevensGame";
import { DataContext } from "./contexts/DataContext";
import { getUsersList } from "./api/Api";
import { getGamesList } from "./api/Games/getGamesList";
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
        <ThemeProvider theme={theme}>
            <SevensGame></SevensGame>
        </ThemeProvider>
    );
}

export default App;
