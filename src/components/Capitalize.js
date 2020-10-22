import React from "react";
import Typography from "@material-ui/core/Typography";

const CapitalizedText = (props) => {
    let text =
        props.capitalize.slice(0, 1).toUpperCase() +
        props.capitalize.slice(1, props.capitalize.length);

    return <>{text}</>;
};

export default CapitalizedText;
