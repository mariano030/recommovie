import React from "react";
import Axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";

/// TIME AGO
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

// containers
import SearchItem from "./containers/SearchItem.js";
import AddDetails from "./containers/AddDetails.js";


export default function App() {
    const recItem = useSelector((state) => state.recItem);
    const selected = useEffect(() => {}, []);
    if (!recItem) {
        return null;
    } else {
        return (
            <div className="row-left">
                <SearchItem />
                <AddDetails />
            </div>