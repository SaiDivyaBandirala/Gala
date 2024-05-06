import React from "react";
import { Typography } from "@mui/material";
import GameTable from "./subs/GameTable";
import Navbar from "../Dashboard/subs/navbar";

const SevensGame = () => {
    return (
        <>
            <Navbar></Navbar>
            <Typography variant="h4" align="center">
                Sevens Game Layout
            </Typography>
            <GameTable></GameTable>
        </>
    );
};
export default SevensGame;
