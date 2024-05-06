import React from "react";
import { Typography } from "@mui/material";
import GamesList from "../GamesList";
import Game from "../Game";
import SevensGame from "../SevensGame";

const Dashboard = () => {
    return (
        <>
            <Typography variant="body1">Header</Typography>
            <GamesList />
            <Game />
            <SevensGame />
            <Typography variant="body1">Footer</Typography>
        </>
    );
};
export default Dashboard;
