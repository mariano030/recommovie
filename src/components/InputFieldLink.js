import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InsertLink from "@material-ui/icons/InsertLink";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function InputFieldIcon(props) {
    const { handleChange, label } = props;
    const classes = useStyles();

    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <InsertLink />
                    </Grid>
                    <Grid item>
                        <TextField
                            name="friendsName"
                            onChange={handleChange}
                            id="input-with-icon-grid"
                            label={label}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
