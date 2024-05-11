import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { NavBarButtons } from "../../../components/buttons/nav-bar-buttons";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { isAuthenticated } = useAuth0();

    return (
        <AppBar position="static" sx={{ marginBottom: "2.5em" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    GALA
                </Typography>
                {isAuthenticated && (
                    <>
                        <Button component={Link} to="/" color="inherit">
                            Dashboard
                        </Button>
                        <Button component={Link} to="/games" color="inherit">
                            Games
                        </Button>
                    </>
                )}

                <NavBarButtons></NavBarButtons>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
