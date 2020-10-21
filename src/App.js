import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // useSelector
import { BrowserRouter, Route, Link } from "react-router-dom";
import Axios from "axios";

import { setAspects, setGenres } from "./redux/actions.js";

import { Button } from "@material-ui/core";

import ResultsItemsList from "./components/ResultsItemsList.js";
//import { unmountComponentAtNode, render } from "react-dom";

/// TIME AGO
// import TimeAgo from "javascript-time-ago";
// import en from "javascript-time-ago/locale/en";
// TimeAgo.addDefaultLocale(en);

// containers
import SearchItem from "./containers/SearchItem.js";
import AddDetails from "./containers/AddDetails.js";
import MoreDetails from "./containers/MoreDetails.js";
import InputFieldIcon from "./components/InputFieldIcon.js";
import DoneButton from "./components/DoneButton.js";
import LinkIsReady from "./containers/LinkIsReady.js";

export default function App() {
    const dispatch = useDispatch();
    const newRecLink = useSelector((state) => state.newRecLink);
    // const recItem = useSelector((state) => state.recItem);
    // const selected = useEffect(() => {}, []);
    //
    console.log("App running");
    useEffect(() => {
        console.log("useEffect in App running");
        console.log("App -> useEffect running");
        (async () => {
            console.log("inside async");
            try {
                console.log("trying... axios");
                const aspectsResults = await Axios.get("/api/get-aspects/");
                const genresResults = await Axios.get("/api/get-genres/");
                console.log(
                    "functiongetAspects -> aspectsResults",
                    aspectsResults
                );
                // dispatch(setAspects(aspectsResults.data));
                dispatch(
                    setAspects(
                        aspectsResults.data.map((aspect) => {
                            return { ...aspect, status: false };
                        })
                    )
                );
                dispatch(setGenres(genresResults.data.genres));
            } catch (err) {
                console.log("error getting aspects or genres -> err", err);
            }
        })();
    }, []);
    return (
        <>
            <div className="column-start">
                <SearchItem />
                {/* <AddDetails /> */}
                <MoreDetails />
                {/* {newRecLink && <LinkIsReady />} */}
                {/* <Button> Material UI</Button> */}
                {/* <InputFieldIcon /> */}
                {/* <DoneButton /> */}
            </div>
        </>
    );
}
