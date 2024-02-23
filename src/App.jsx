import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { fetchMetaData } from "./api/Api";
import Theme from "./assets/styles/Theme.json";
const theme = createTheme(Theme);

function App() {
    const [users, setUsers] = useState([]);

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
            <Typography>GALA</Typography>
            <Typography></Typography>
            <Button variant="contained">Theme</Button>
        </ThemeProvider>
    );
}

export default App;
