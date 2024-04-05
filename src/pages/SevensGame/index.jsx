import React, { useContext, useEffect } from "react";
import { Typography } from "@mui/material";
import { DataContext } from "../../contexts/DataContext";
import ReactTable from "./subs/GameTable";

const SevensGame = () => {
    const { gamesList, updateSelectedGame, selectedGame } =
        useContext(DataContext);

    useEffect(() => {
        updateSelectedGame(gamesList[0]);
    }, [gamesList]);
    return (
        <>
            <Typography variant="h4" align="center">
                Sevens Game Layout
            </Typography>
            <ReactTable></ReactTable>
        </>
    );
};
export default SevensGame;
