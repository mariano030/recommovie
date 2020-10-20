import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import TheatersIcon from "@material-ui/icons/Theaters";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function DoneButton() {
    const classes = useStyles();

    return (
        <div className="row-center">
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<TheatersIcon />}
            >
                Recommend Now
            </Button>
        </div>
    );
}
