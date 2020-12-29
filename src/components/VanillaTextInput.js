import React, { useState, setState } from "react";

// import { setRecMessage } from "../redux/actions.js";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

// import useDp & useSel
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function VanillaTextInput() {
    const classes = useStyles();
    const [variable, setVariable] = useState("leer");

    // get variables form state!!
    const variable2 = useSelector((state) => state.variable2);
    const dispatch = useDispatch();

    /// ADD handlechange für onChange!!
    const handleVanilla = (e) => {
        console.log("e.target.value", e.target.value);
        setVariable(e.target.value);
        dispatch(setRecMessage(e.target.value));
        console.log("variable", variable);
    };

    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">
                    With a start adornment
                    {variable}
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="TextField"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
            <div className={classes.margin}>
                teste den mal:
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField
                            value={variable}
                            onChange={handleVanilla}
                            id="input-with-icon-grid"
                            label="With a grid"
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
