import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { fetchMetaData } from "./api/Api";

const theme = createTheme();

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchMetaData()
            .then((data) => {
                console.log(data.data.users);
                setUsers(data.data.users);
            })
            .catch((error) => {
                console.error("Error fetching metadata:", error);
            });
    }, [users]);
    return (
        <ThemeProvider theme={theme}>
            <Typography>GALA</Typography>
            <Typography>{users}</Typography>
            <Button variant="contained">Theme</Button>
        </ThemeProvider>
    );
}

export default App;
