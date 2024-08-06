import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import PropTypes from "prop-types";
const CSlider = ({ value, setValue }) => {
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
            onChange={(value) => setValue(value)}
            continuous={{ enabled: false }}
        />
    );
};
CSlider.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
};
export default CSlider;
