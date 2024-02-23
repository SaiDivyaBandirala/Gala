import React from "react";
import "./App.css";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
    return (
        <ThemeProvider theme={theme}>
            <Typography secondary>GALA</Typography>
            <Button variant="contained">Theme</Button>
        </ThemeProvider>
    );
}

export default App;
