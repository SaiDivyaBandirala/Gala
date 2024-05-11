import React from "react";
import { Typography } from "@mui/material";
import GameTable from "./subs/GameTable";
import Navbar from "../Dashboard/subs/navbar";
import { BaseContainer } from "../../components/containers/base-contatiner";

const SevensGame = () => {
    return (
        <>
            <Navbar></Navbar>

            <Typography variant="h4" align="center">
                Sevens Game Layout
            </Typography>
            <BaseContainer>
                <GameTable></GameTable>
            </BaseContainer>
        </>
    );
};
export default SevensGame;
