import React, { useContext } from "react";
import { ButtonBase, Stack, Typography } from "@mui/material";
import GameTable from "./subs/GameTable";
import Navbar from "../Dashboard/subs/navbar";
import BaseContainer from "../../components/containers/base-contatiner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const SevensGame = () => {
    const { updateSelectedGame } = useContext(DataContext);

    const navigate = useNavigate();

    const handleBack = () => {
        updateSelectedGame(null);
        navigate("/games");
    };
    const handleEdit = () => {
        navigate("/edit-game");
    };

    return (
        <>
            <Navbar></Navbar>
            <BaseContainer>
                <Stack direction="row" sx={{ padding: "1em" }}>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        <ButtonBase
                            onClick={() => handleBack()}
                            sx={{ padding: "0 1em" }}
                        >
                            <ArrowBackIcon />
                        </ButtonBase>
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ align: "center", flexGrow: 1 }}
                    >
                        Game Scores
                    </Typography>
                    <Typography variant="h4" sx={{}}>
                        <ButtonBase
                            onClick={() => handleEdit()}
                            sx={{ padding: "0 1em" }}
                        >
                            <EditIcon />
                        </ButtonBase>
                    </Typography>
                </Stack>
                <GameTable></GameTable>
            </BaseContainer>
        </>
    );
};
export default SevensGame;
