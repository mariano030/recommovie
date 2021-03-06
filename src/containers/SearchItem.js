import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecItemRecData, getAspectsAndGenres } from "../redux/actions.js";

import Axios from "../axios";
// material ui
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import MovieIcon from "@material-ui/icons/Movie";
import TheatersIcon from "@material-ui/icons/Theaters";

// components
import ResultsItemsList from "../components/ResultsItemsList.js";
import ItemIcon from "../components/ItemIcon.js";
// import ItemInfo from "../components/ItemInfo.js";
import ItemDate from "../components/ItemDate.js";
import ResultItem from "../components/ResultItem.js";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
}));

export default function SearchItem() {
    const genres = useSelector((state) => state.genres);

    const classes = useStyles();
    const dispatch = useDispatch();
    const searchField = useRef(); // to manipulate the dom manually, reference an element of DOM

    const [userInput, setUserInput] = useState("");
    const [title, setTitle] = useState("Most recently registered Users:");
    const [items, setItems] = useState([]);
    //const [credits, setCredits] = useState({});
    const recItem = useSelector((state) => state.recItem);
    //const [recommend, setRecommend] = useState({});
    //const [mounted, setMounted] = useState("");
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };
    const handleClick = (item) => {
        console.log("handleClick running - SETTING item ->recItem");
        dispatch(setRecItemRecData(item));

        //searchField.current.value = "";
        setItems([]);
        setUserInput("");
    };
  
    useEffect(() => {
        console.log("SearchItem useEffect running");
        let ignore = false;
        if (userInput == "") {
            setItems([]);
        } else {
            if (userInput && userInput.length >= 3) {
                (async () => {
                    try {
                        console.log("/api/multi-search/ " + userInput);
                        const requestUrl = "/api/multi-search/" + userInput;
                        const searchResults = await Axios.get(requestUrl);
                        console.log("ajax done", searchResults.data);
                        console.log(items);
                        if (!ignore) {
                            //setItems([]);
                            let searchResultsFiltered = searchResults.data;
                            // .slice(
                            //     0,
                            //     limit results here but "burning" :()
                            // )
                            setItems(searchResultsFiltered);
                        } else {
                            console.log("ignored!");
                        }
                    } catch (err) {
                        console.log("error", err);
                    }
                })();

                return () => {
                    console.log("cleanup running");
                    ignore = true;
                };
            } else {
                setItems([]);
                // setTitle("Search for your recommendation:");
                // // const formData = new FormData();
                // // formData.append(("userInput", userInput));
                // console.log(
                //     "now go an get the ones i am searching for, maDUDE"
                // );
                // const requestUrl = "/api/find-users/" + userInput;

                // (async () => {
                //     try {
                //         console.log("ajax about to start!");
                //         const { data } = await Axios.post(requestUrl);
                //         //setMovies(data);
                //     } catch (err) {
                //         console.log("error ", err);
                //     }
                // })();
            }
            // ,
            // [userInput]
            // }
        }
    }, [userInput]);

    return (
        <div>
            <div className="row-center">
                {/* <TheatersIcon
                    color="primary"
                    style={{
                        fontSize: 30,
                        transform: "translateY(-10%)",
                        margin: "10px",
                    }}
                /> */}
                <div className="icon-movie-title">
                    <img
                        className="icon-movie-title"
                        src="/icons/media_type_movie.svg"
                        alt="movie"
                    ></img>
                </div>
                <div className="icon-tv-title">
                    <img
                        className="icon-tv-title"
                        src="/icons/media_type_tv.svg"
                        alt="tv"
                    ></img>
                </div>
                <Typography variant="h4" color="primary">
                    Recommend.
                </Typography>
            </div>
            <div className="search-field-container">
                <TextField
                    ref={searchField}
                    onChange={handleChange}
                    name="search"
                    placeholder="Search ..."
                    id="outlined-basic"
                    label="Movie / TV-Show"
                    variant="outlined"
                    fullWidth={true}
                />
                {/* <p className="powered-by-text-small">
                    Powered by{" "}
                    <img
                        className="powered-by-small"
                        src="/icons/tmdb-short.svg"
                    ></img>
                </p> */}
            </div>

            {items.length >= 1 && (
                <List className={classes.root}>
                    {items.map((item, i) => {
                        // wrap in button here?
                        return (
                            <div
                                key={i}
                                className="pointer"
                                onClick={() => handleClick(item)}
                            >
                                <ResultItem item={item} />
                            </div>
                        );
                    })}
                </List>
            )}

            {!items && (
                <Typography>
                    Select Add Details Get Recommendation Link
                </Typography>
            )}
        </div>
    );
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
