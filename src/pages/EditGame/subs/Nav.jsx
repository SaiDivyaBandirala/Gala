import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { ButtonBase, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/sevens");
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
                Edit Scores
            </Typography>
            <Typography variant="h4">
                <ButtonBase
                    onClick={() => handleBack()}
                    sx={{ padding: "0 1em" }}
                >
                    <CheckIcon color="secondary" />
                </ButtonBase>
            </Typography>
        </Stack>
    );
}
