import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";

export default function FocusButton(props) {
    const { label } = props;
    const [selected, setSelected] = React.useState(false);

    return (
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
        >
            {label}
        </ToggleButton>
    );
}
