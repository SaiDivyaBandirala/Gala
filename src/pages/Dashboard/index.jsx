import React, { useEffect } from "react";
import Navbar from "./subs/navbar";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileCard from "../../components/containers/profile-container";
import BaseContainer from "../../components/containers/base-contatiner";
const Dashboard = () => {
    const { user } = useAuth0();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <>
            <Navbar></Navbar>
            <BaseContainer>{user && <ProfileCard user={user} />}</BaseContainer>
        </>
    );
};
export default Dashboard;
