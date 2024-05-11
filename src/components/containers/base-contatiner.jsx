import { Paper, Container, CssBaseline } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const BaseContainer = ({ children }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Paper elevation={0} sx={{ padding: "1em" }}>
                    {children}
                </Paper>
            </Container>
        </React.Fragment>
    );
};
export default BaseContainer;
// Add prop validation for children
BaseContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
