import { Paper } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export const BaseContainer = ({ children }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                margin: "auto",
                width: {
                    sm: "480px",
                    md: "960px",
                    lg: "1280px",
                    xl: "1920px",
                },
            }}
        >
            {children}
        </Paper>
    );
};

// Add prop validation for children
BaseContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
