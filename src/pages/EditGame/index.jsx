import { Typography } from "@mui/material";
import React, { useContext } from "react";
import Navbar from "../Dashboard/subs/navbar";
import BaseContainer from "../../components/containers/base-contatiner";
import { DataContext } from "../../contexts/DataContext";

const EditGame = () => {
    const { selectedGame } = useContext(DataContext);
    return (
        <>
            <Navbar></Navbar>
            <BaseContainer>
                <Typography>EditGame</Typography>
            </BaseContainer>
        </>
    );
};

export default EditGame;
