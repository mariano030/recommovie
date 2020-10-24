import React from "react";
import Typography from "@material-ui/core/Typography";

const CapitalizedText = ({ capitalize = "" }) => {
    let text =
        capitalize.slice(0, 1).toUpperCase() +
        capitalize.slice(1, capitalize.length);

    return <>{text}</>;
};

export default CapitalizedText;
