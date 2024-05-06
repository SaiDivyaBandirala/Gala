import React from "react";
import { Typography } from "@mui/material";
import GamesList from "../GamesList";
import Game from "../Game";
import SevensGame from "../SevensGame";
import Navbar from "./subs/navbar";

const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>
            <Typography variant="body1">Footer</Typography>
        </>
    );
};
export default Dashboard;
