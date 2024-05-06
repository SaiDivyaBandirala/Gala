import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={Link} to="/" color="inherit">
                    Dashboard
                </Button>
                <Button component={Link} to="/games" color="inherit">
                    Games
                </Button>
                <Button component={Link} to="/sevens" color="inherit">
                    Sevens
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
