import React, { useContext, useEffect } from "react";
import { Divider, Typography } from "@mui/material";
import { DataContext } from "../../contexts/DataContext";
import GameTable from "./subs/GameTable";

const SevensGame = () => {
    return (
        <>
            <Typography variant="h4" align="center">
                Sevens Game Layout
            </Typography>
            <GameTable></GameTable>
        </>
    );
};
export default SevensGame;
