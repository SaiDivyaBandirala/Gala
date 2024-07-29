import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

import { ButtonBase, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

export default function Nav() {
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
        <Stack direction="row" sx={{ padding: "1em" }}>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
                <ButtonBase
                    onClick={() => handleBack()}
                    sx={{ padding: "0 1em" }}
                >
                    <ArrowBackIcon />
                </ButtonBase>
            </Typography>
            <Typography variant="h4" sx={{ align: "center", flexGrow: 1 }}>
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
    );
}
