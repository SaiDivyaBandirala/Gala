import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { fetchMetaData, getUsersList, getUser } from "./api/Api";
import Theme from "./assets/styles/Theme.json";
import Dashboard from "./pages/Dashboard";
const theme = createTheme(Theme);

function App() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const metaDataResponse = await fetchMetaData();
                const usersListResponse = await getUsersList(metaDataResponse);

                usersListResponse.data.map((user) => {
                    getUser(user);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    );
}

export default App;
