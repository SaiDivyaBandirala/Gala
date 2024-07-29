import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PropTypes from "prop-types";

const Carousel = ({ items, setSelectedItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
        handleItemClick(currentIndex);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
        handleItemClick(currentIndex);
    };
    console.log(typeof setSelectedItem);
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handlePrevious} disabled={currentIndex == 0}>
                <NavigateBeforeIcon />
            </IconButton>
            <Typography variant="body1">{items[currentIndex]}</Typography>
            <IconButton
                onClick={handleNext}
                disabled={currentIndex == items.length - 1}
            >
                <NavigateNextIcon />
            </IconButton>
        </div>
    );
};
Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
};
export default Carousel;
