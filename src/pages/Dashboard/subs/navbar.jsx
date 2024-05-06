import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, IconButton } from "@mui/material";
import { LoginButton } from "../../../components/buttons/Login-button";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    GALA
                </Typography>
                <Button component={Link} to="/" color="inherit">
                    Dashboard
                </Button>
                <Button component={Link} to="/games" color="inherit">
                    Games
                </Button>
                <Button component={Link} to="/sevens" color="inherit">
                    Sevens
                </Button>
                <LoginButton />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
