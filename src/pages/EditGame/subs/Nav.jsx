import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { ButtonBase, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Nav({ onSave, onDiscard }) {
    const navigate = useNavigate();

    const handleBack = () => {
        onDiscard();
        navigate("/sevens");
    };

    const handleSave = () => {
        onSave();
        navigate("/sevens");
    };

    return (
        <Stack direction="row" sx={{ padding: "1em" }}>
            <ButtonBase onClick={handleBack} sx={{ padding: "0 1em" }}>
                <ArrowBackIcon />
            </ButtonBase>
            <Typography variant="h4" sx={{ flexGrow: 1, textAlign: "center" }}>
                Edit Scores
            </Typography>
            <ButtonBase onClick={handleSave} sx={{ padding: "0 1em" }}>
                <CheckIcon color="secondary" />
            </ButtonBase>
        </Stack>
    );
}
Nav.propTypes = {
    onSave: PropTypes.func.isRequired,
    onDiscard: PropTypes.func.isRequired,
};
