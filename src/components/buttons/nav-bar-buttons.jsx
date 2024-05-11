import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./Login-button";
import { LogoutButton } from "./Logout-button";

export const NavBarButtons = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && <LogoutButton />}
        </>
    );
};
