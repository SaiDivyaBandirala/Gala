import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataContext } from "./contexts/DataContext";
import "./App.css";
import { fetchMetaData } from "./api/Api";

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
    const { usersList } = useContext(DataContext);
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
