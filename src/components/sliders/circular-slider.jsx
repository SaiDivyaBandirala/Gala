import React, { useEffect, useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import PropTypes from "prop-types";
const CSlider = ({ value }) => {
    const [sliderValue, setSliderValue] = useState(value);

    useEffect(() => {
        setSliderValue(value);
    }, [value]);

    return (
        <CircularSlider
            min={0}
            max={130}
            label="Score"
            knobPosition="bottom"
            valueFontSize="4rem"
            trackColor="#eeeeee"
            progressColorFrom="#fdbc00"
            progressColorTo="#fdbc00"
            labelColor="#303030"
            knobColor="#303030"
            dataIndex={value}
            onChange={setSliderValue}
            continuous={{ enabled: false }}
        />
    );
};
CSlider.propTypes = {
    value: PropTypes.number.isRequired,
};
export default CSlider;
