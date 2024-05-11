import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";

const CSlider = () => {
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
            continuous={{ enabled: false }}
        />
    );
};

export default CSlider;
