import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneButton from "../components/DoneButton.js";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import Share from "@material-ui/icons/Share";

import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ItemIcon from "../components/ItemIcon.js";
import ItemImage from "../components/ItemImage.js";
import TextField from "../components/TextField";
import InputFieldIcon from "../components/InputFieldIcon.js";
import InputFieldLink from "../components/InputFieldLink.js";
import TextFieldMessage from "../components/TextFieldMessage.js";
import FocusButton from "../components/FocusButton.js";
import FocusAccordion from "../components/FocusAccordion.js";
import CheckCircle from "@material-ui/icons/CheckCircle";

//test stuff below - just delte when done with recData
import VanillaTextInput from "../components/VanillaTextInput.js";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function LinkIsReady({ recLink }) {
    /// RED??
    const styles = (theme) => ({
        disabledInput: {
            backgroundColor: theme.palette.primary || "red",
        },
    });

    ///
    const classes = useStyles();
    const recData = useSelector((state) => state.recData);
    //const { register, handleSubmit, errors } = useForm();

    // const [values, handleChange] = useStatefulFields();
    // const [recipientName, setRecipientName] = useState();
    //const recAspects = useSelector((state) => state.recAspects);
    //redux
    const dispatch = useDispatch();
    const recItem = useSelector((state) => state.recItem);
    const genres = useSelector((state) => state.genres);
    const aspects = useSelector((state) => state.aspects);

    // input fields:
    const handleChangeMaterial = (e) => {
        console.log(e.target.value);
        //setValue(e.target.value);
        let dataObj = { [e.target.name]: e.target.value };
        dispatch(addToRecData(dataObj));
    };

    const copyToClipboard = (e) => {
        console.log("copy to clipboard running");
        e.target.select();
        document.execCommand("copy");
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        //this.setState({ copySuccess: "Copied!" });
    };
    // useEffect(() => {
    //     if (!recLink) {
    //         return;
    //     }
    //     console.log("imgUrl", imgUrl);
    //     setImgUrl("https://image.tmdb.org/t/p/w780" + recItem[imgStyle]);
    //     //imgUrl = "https://image.tmdb.org/t/p/w780" + recItem.backdrop_path;
    //     switch (recItem.media_type) {
    //         case "movie":
    //             setRecDate("(" + recItem.release_date.substring(0, 4) + ")");
    //             iconUrl = "/icons/media_type_movie.svg";
    //             break;
    //         case "tv":
    //             setRecDate("(" + recItem.first_air_date.substring(0, 4) + ")");
    //             iconUrl = "/icons/media_type_tv.svg";
    //             break;
    //         case "person":
    //             iconUrl = "/icons/media_type_person.svg";
    //             break;
    //     }
    // }, [recItem]);

    if (!recLink) {
        return null;
    } else {
        return (
            <>
                {/* <Typography variant="h5">Your link is ready</Typography> */}
                <div className="row-center">
                    <div className="row-center">
                        <CheckCircle />
                    </div>
                    <div className="spacer"></div>
                    <div>
                        <Typography variant="overline">
                            {"  "} Just copy the link and send it
                            {recData.recipientName &&
                                " to " + recData.recipientName}
                            .
                        </Typography>
                        {/* <Typography variant="h2">{recLink}</Typography> */}
                    </div>
                </div>

                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    fullWidth
                >
                    {/* <InputLabel className={classes.red}>
                        Recommendation Link
                    </InputLabel> */}
                    <Input
                        className={classes.red}
                        fullWidth
                        disabled
                        color="primary"
                        value={recLink}
                        onClick={(e) => {
                            copyToClipboard(e);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <Share />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </>
        );
    }
}

// code
// mediaType e_mediaType, - GET
// mediaId INT NOT NULL, - GET
// senderId  INT REFERENCES users(id) NOT NULL, - GET
// recipientId          NULL
// imageType e_imageType, ??
// customImage VARCHAR(255), - save full URL?
// focus INT REFERENCES focus(id), - focus Array!
// message VARCHAR(255),    - ->state
// trailer VARCHAR(255),   ???
// location VARCHAR(255),   ???
// extUrl VARCHAR(255),     DOZ IT
// senderRating INT,        - SENDER RATING??
// recipientRating INT,
