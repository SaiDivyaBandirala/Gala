import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../Dashboard/subs/navbar";
import BaseContainer from "../../components/containers/base-contatiner";

const EditGame = () => {
    return (
        <>
            <Navbar></Navbar>
            <BaseContainer></BaseContainer>
            <Typography>EditGame</Typography>
        </>
    );
};

export default EditGame;
