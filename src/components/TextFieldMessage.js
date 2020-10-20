import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ChatBubbleOutlined from "@material-ui/icons/ChatBubbleOutlined";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

export default function TextFieldMessage(props) {
    const classes = useStyles();
    const { onChange, label, placeholder, name } = props;

    //const [value, setValue] = React.useState("Controlled");

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <TextField
                        name={name}
                        onChange={onChange}
                        id="standard-textarea"
                        label={label}
                        placeholder={placeholder}
                        multiline
                    />
                </Grid>
            </Grid>
        </form>
    );
}
