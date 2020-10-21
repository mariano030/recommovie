import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneButton from "../components/DoneButton.js";

import ItemIcon from "../components/ItemIcon.js";
import ItemImage from "../components/ItemImage.js";
import TextField from "../components/TextField";
import InputFieldIcon from "../components/InputFieldIcon.js";
import InputFieldLink from "../components/InputFieldLink.js";
import TextFieldMessage from "../components/TextFieldMessage.js";
import FocusButton from "../components/FocusButton.js";
import FocusAccordion from "../components/FocusAccordion.js";
import ToggleButton from "@material-ui/lab/ToggleButton";

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

export default function LinkIsReady() {
    const classes = useStyles();

    //const { register, handleSubmit, errors } = useForm();

    // const [values, handleChange] = useStatefulFields();
    const [recipientName, setRecipientName] = useState();
    //const recAspects = useSelector((state) => state.recAspects);
    //redux
    const dispatch = useDispatch();
    const recItem = useSelector((state) => state.recItem);
    const genres = useSelector((state) => state.genres);
    const aspects = useSelector((state) => state.aspects);
    const recData = useSelector((state) => state.recData);

    // input fields:
    const handleChangeMaterial = (e) => {
        console.log(e.target.value);
        //setValue(e.target.value);
        let dataObj = { [e.target.name]: e.target.value };
        dispatch(addToRecData(dataObj));
    };

    useEffect(() => {
        if (!recLink) {
            return;
        }
        console.log("imgUrl", imgUrl);
        setImgUrl("https://image.tmdb.org/t/p/w780" + recItem[imgStyle]);
        //imgUrl = "https://image.tmdb.org/t/p/w780" + recItem.backdrop_path;
        switch (recItem.media_type) {
            case "movie":
                setRecDate("(" + recItem.release_date.substring(0, 4) + ")");
                iconUrl = "/icons/media_type_movie.svg";
                break;
            case "tv":
                setRecDate("(" + recItem.first_air_date.substring(0, 4) + ")");
                iconUrl = "/icons/media_type_tv.svg";
                break;
            case "person":
                iconUrl = "/icons/media_type_person.svg";
                break;
        }
    }, [recItem]);

    if (!recLink) {
        return null;
    } else {
        return (
            <>
                {/* MORE DETAILS
                {recLink && <h1>{recLink}</h1>}
                    <div>
                        <ItemImage
                            item={recItem}
                            myClass="hero-image"
                        ></ItemImage>
                        <div className="small"></div>
                    </div>
                    <div>
                        <Typography >
                            Your link for                                     {recItem.original_name ||
                                        recItem.original_title}
                                    {recItem.media_type != "person" &&
                                        " (" + { recDate } + ")"} is ready.
                        </Typography>
                        <Typography >
                            Just copy the link and send it to {recData.recipientName}.
                        </Typography>
                        <Typography >
                            {recLink}
                        </Typography>
                        <div className="row-start">
                            <div>
                                <ItemIcon
                                    item={recItem}
                                    myClass="icon-search"
                                />
                            </div>
                            <div className="item-title">
                                <Typography variant="h5">
                                    {recItem.original_name ||
                                        recItem.original_title}
                                    {recItem.media_type != "person" &&
                                        " (" + { recDate } + ")"}
                                </Typography>
                            </div>
                        </div> */}
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
