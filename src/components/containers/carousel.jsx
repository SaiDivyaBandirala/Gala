import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PropTypes from "prop-types";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handlePrevious}>
                <NavigateBeforeIcon />
            </IconButton>
            <Typography variant="body1">{items[currentIndex]}</Typography>
            <IconButton onClick={handleNext}>
                <NavigateNextIcon />
            </IconButton>
        </div>
    );
};
Carousel.propTypes = {
    items: PropTypes.array.isRequired,
};
export default Carousel;
