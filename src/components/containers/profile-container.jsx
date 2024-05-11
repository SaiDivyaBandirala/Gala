import React from "react";
import PropTypes from "prop-types";
import { Avatar, Typography, Paper } from "@mui/material";

const ProfileCard = ({ user }) => {
    const { picture, given_name, family_name, nickname } = user;

    return (
        <Paper
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px",
                maxWidth: 300,
            }}
        >
            <Avatar
                alt={`${given_name} ${family_name}`}
                src={picture}
                sx={{
                    width: "80px",
                    height: "80px",
                    marginBottom: "8px",
                }}
            />
            <Typography
                variant="h6"
                sx={{
                    marginBottom: "8px",
                    textTransform: "capitalize",
                }}
            >
                {`${given_name} ${family_name}`}
            </Typography>
            <Typography variant="caption">{nickname}</Typography>
        </Paper>
    );
};

ProfileCard.propTypes = {
    user: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        given_name: PropTypes.string.isRequired,
        family_name: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProfileCard;
