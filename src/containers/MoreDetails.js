import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { addRecAspect, addToRecData } from "../redux/actions.js";
import Axios from "../axios";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneButton from "../components/DoneButton.js";
import LinkIsReady from "../containers/LinkIsReady";
import useStatefulFields from "../hooks/useStatefulFields";

import ItemIcon from "../components/ItemIcon.js";
import ItemImage from "../components/ItemImage.js";
import TextField from "../components/TextField";
import InputFieldIcon from "../components/InputFieldIcon.js";
import InputFieldLink from "../components/InputFieldLink.js";
import TextFieldMessage from "../components/TextFieldMessage.js";
import FocusButton from "../components/FocusButton.js";
import FocusAccordion from "../components/FocusAccordion.js";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { aspectStatusToggle } from "../redux/actions";
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

export default function MoreDetails() {
    const classes = useStyles();

    //const { register, handleSubmit, errors } = useForm();

    // const [values, handleChange] = useStatefulFields();
    const [selected, setSelected] = React.useState(false);
    const [senderName, setSenderName] = useState();
    const [recipientName, setRecipientName] = useState();
    const [message, setMessage] = useState();
    const [customUrl, setCustomUrl] = useState();
    const [imgStyle, setPictureType] = useState("backdrop_path");
    const [imgUrl, setImgUrl] = useState("");
    const [recDate, setRecDate] = useState("");
    const [recLink, setRecLink] = useState("");
    const [aspectsStatus, setAspectsStatus] = useState([]);
    const [credits, setCredits] = useState({}); // useState(credits)

    //const recAspects = useSelector((state) => state.recAspects);
    //redux
    const dispatch = useDispatch();
    const recItem = useSelector((state) => state.recItem);
    const genres = useSelector((state) => state.genres);
    const aspects = useSelector((state) => state.aspects);
    const recData = useSelector((state) => state.recData);
    // const selectedAspects = useSelector((state) => state.selectedAspects);
    //const recLink = useSelector((state) => state.recLink;
    let focusId = [];
    //const selected = useEffect(() => {}, []);
    // const onSubmit = (data) => {
    //     console.log(data);
    // };
    console.log("recItem: ", recItem);
    let iconUrl = "";
    let date = "";

    // const aspectsStatus = aspects.map((aspect) => {
    //     return { ...aspect, status: false };
    // });

    const handleSubmit = () => {
        console.log("submit button pressed");
        console.log("recData", recData);

        if (!recItem) {
            console.log("no recItem can not recOmmend");
        } else {
            (async () => {
                try {
                    const response = await Axios.post("/rec/", {
                        ...recData,
                        aspects: aspects
                            .filter((aspect) => aspect.status == true)
                            .map((aspect) => aspect.id),
                    });

                    console.log(
                        "the link is here! response.data",
                        response.data.link
                    );
                    //dispatch(setRecLink(response.data.link));
                    setRecLink(response.data.link);
                } catch (err) {
                    console.log("error recommending...!", err);
                }
            })();
        }
    };

    const handleFocusButton = (aspect, i) => {
        console.log("submit button pressed");
        dispatch(aspectStatusToggle(i));
    };

    // input fields:
    const handleChangeMaterial = (e) => {
        console.log(e.target.value);
        //setValue(e.target.value);
        let dataObj = { [e.target.name]: e.target.value };
        dispatch(addToRecData(dataObj));
    };

    const toggleImage = () => {
        console.log("changing imgStyle from previous", imgStyle);
        if (recItem.poster_path && recItem.backdrop_path) {
            console.log("has poster & backdeop");
        } else if (recItem.poster_path) {
            console.log("has only recItem.poster_path");
        } else if (recItem.backdrop_path) {
            console.log("has only backdrop_path");
        } else {
            console.log("has only backdrop_path");
            setImgUrl("/images/default_picture.webp");
        }
        if (imgStyle == "backdrop_path") {
            setImgUrl("poster_path");
            setImgUrl("https://image.tmdb.org/t/p/w780" + recItem.poster_path);
        } else {
            setImgUrl("poster_path");
            setImgUrl(
                "https://image.tmdb.org/t/p/w780" + recItem.backdrop_path
            );
        }
        console.log(imgUrl);
    };

    useEffect(() => {
        if (recLink) {
            //dispatch(setRecLink(recLink));
        } else {
            console.log("no link yet...");
        }
    }, [recLink]);

    // get credits
    useEffect(() => {
        if (!recItem) {
            return;
        } else {
            console.log("CREDITS BY ID running");
            if (recItem.media_type == "person") {
                return;
            } else {
                console.log("getting CREDITS for ", recItem.id);
                (async () => {
                    try {
                        console.log("ITEM ID???", recItem.id);
                        const requestUrl = "/api/credits-by-id/" + recItem.id;
                        const credits = await Axios.get(requestUrl);
                        console.log(
                            "CREDITS ajax done - credits.data",
                            credits.data
                        );
                        setCredits(credits.data);
                        // let mounted = true;
                        if (credits && credits.crew) {
                            let [director] = credits.crew.map((credit) => {
                                if (credit.department == "Directing") {
                                    return credit;
                                }
                            });
                            console.log("director", director);
                        }
                    } catch (err) {
                        console.log("error", err);
                    }
                })();
            }
        }
    }, [recItem]);
    // set stuff for rec Item
    useEffect(() => {
        if (!recItem) {
            return;
        }
        console.log("imgUrl", imgUrl);
        setImgUrl("https://image.tmdb.org/t/p/w780" + recItem[imgStyle]);
        switch (recItem.media_type) {
            case "movie":
                date = "(" + recItem.release_date.substring(0, 4) + ")";
                console.log("DATE", date);
                setRecDate(date);
                iconUrl = "/icons/media_type_movie.svg";
                break;
            case "tv":
                date = "(" + recItem.first_air_date.substring(0, 4) + ")";
                setRecDate(date);
                iconUrl = "/icons/media_type_tv.svg";
                console.log("DATE", date);
                break;
            case "person":
                iconUrl = "/icons/media_type_person.svg";
                break;
        }
    }, [recItem]);

    const handleClick = (id) => {
        console.log("clicked button with id:", id);
        console.log(
            "clicked button with name",
            aspects.filter((aspect) => {
                if (aspect.id == id) {
                    console.log("aspect.name", aspect.name);
                    return aspect;
                }
            })
        );
        const selectedAspect = aspects.filter((aspect) => {
            if (aspect.id == id) {
                console.log("aspect.name", aspect.name);
                return aspect;
            }
        })[0].name;
        dispatch(addRecAspect(selectedAspect));
        console.log("selectedAspect", selectedAspect);
    };

    if (!recItem) {
        return null;
    } else {
        return (
            <>
                {recLink && <h1>{recLink}</h1>}
                <div className="result-recItem">
                    <div>
                        <ItemImage
                            item={recItem}
                            myClass="hero-image"
                        ></ItemImage>
                        <div className="small"></div>
                    </div>
                    <div>
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
                                    {/* {recItem.media_type != "person" && {
                                        recDate,
                                    }} */}{" "}
                                    {recDate}
                                </Typography>
                            </div>
                        </div>

                        <div className="small">Id: {recItem.id}</div>
                        {/* {recItem && <img src={imgUrl}></img>} */}
                        <div className="genres">
                            <div style={{ width: "100%" }}>
                                {recItem.genre_ids &&
                                    recItem.genre_ids.map((genreId) => (
                                        <Box
                                            key={genreId}
                                            component="div"
                                            display="inline"
                                            fontWeight="fontWeightLight"
                                            fontSize={10}
                                            p={1}
                                            m={1}
                                            // cssStyle={{ bgcolor: "yellow" }}
                                            bgcolor="white"
                                            // bgcolor="background.paper"
                                            // cssStyle={class: "genre-item"}
                                        >
                                            {genres.map((item) => {
                                                if (item.id == genreId) {
                                                    return item.name;
                                                }
                                            })}
                                        </Box>
                                    ))}
                            </div>
                            {/* {recItem.genre_ids &&
                                recItem.genre_ids.map((genreId) => (
                                    <div className="genre-item" key={genreId}>
                                        {genres.map((item) => {
                                            if (item.id == genreId) {
                                                return item.name;
                                            }
                                        })}
                                    </div>
                                ))} */}
                        </div>
                    </div>
                    <div className="column-center">
                        <InputFieldIcon
                            name="recipientName"
                            value={recipientName}
                            onChange={handleChangeMaterial}
                            label="Recommend for"
                        />
                        <InputFieldIcon
                            name="senderName"
                            value={senderName}
                            onChange={handleChangeMaterial}
                            label="Recommended by"
                        />

                        <TextFieldMessage
                            name="message"
                            value={message}
                            onChange={handleChangeMaterial}
                            label="Personal message"
                            placeholder="'Check out this moving gem. I'm sure you'll like it!'"
                        />
                        <InputFieldLink
                            name="customUrl"
                            value={customUrl}
                            onChange={handleChangeMaterial}
                            label="custom url"
                        />
                    </div>
                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    Highlight aspects:
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {aspects &&
                                        aspects.map((aspect, i) => (
                                            <FocusButton
                                                // key={aspect.id}
                                                name={aspect.id}
                                                className="aspect-item"
                                                label={aspect.name}
                                                onClick={() =>
                                                    handleFocusButton(aspect, i)
                                                }
                                            />
                                        ))}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>{" "}
                    </div>
                    {/* <FocusAccordion aspects={aspects} />
                    <div className="column-center">
                        <div className="aspects">
                            {aspects &&
                                aspects.map((aspect) => (
                                    <FocusButton
                                        key={aspect.id}
                                        className="aspect-item"
                                        label={aspect.name}
                                        onClick={() => {
                                            this.handleClick(aspect.id);
                                        }}
                                    />
                                ))}
                        </div> */}
                    {/* message: {values.message} senderName:{" "}
                        {values.senderName} recipientName {values.recipientName}
                        {value} */}
                    {customUrl} {senderName} {recipientName} {message}
                </div>
                {/* <div className="genres">{genres && aspects.map(()=> <div className="genre">)}</div> */}
                {/* <Button /> */}
                {/* <VanillaTextInput /> */}
                {/* </div> */}

                <DoneButton onClick={() => handleSubmit()} />

                {recLink && (
                    <LinkIsReady
                        className={classes.red}
                        recLink={recLink}
                        recipientName={recData.recipientName}
                    />
                )}
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
