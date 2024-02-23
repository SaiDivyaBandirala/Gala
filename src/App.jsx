import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { fetchMetaData, getUser, getUsersList } from "./api/Api";

const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#52615A",
            light: "#AAC2B1",
            dark: "#52615A",
            contrastText: "#FAFAFC",
        },
        secondary: {
            main: "#F39581",
            contrastText: "#FAFAFC",
        },
        background: {
            default: "#ffffff",
            paper: "#ffffff",
        },
        text: {
            primary: "#000000",
            secondary: "#FAFAFC",
            disabled: "#111419",
            hint: "#111419",
        },
    },
});

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
            <Typography>GALA</Typography>
            <Typography></Typography>
            <Button variant="contained">Theme</Button>
        </ThemeProvider>
    );
}

export default App;
