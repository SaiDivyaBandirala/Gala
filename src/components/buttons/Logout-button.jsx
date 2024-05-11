import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";

export const LogoutButton = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return (
        <Button color="secondary" variant="text" onClick={handleLogout}>
            Log Out
        </Button>
    );
};
