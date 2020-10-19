import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecItem } from "../redux/actions.js";

import Axios from "../axios";
import ItemIcon from "../components/ItemIcon.js";
import ItemInfo from "../components/ItemInfo.js";
import ItemDate from "../components/ItemDate.js";
export default function SearchItem() {
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
        dispatch(setRecItem(item));
        //searchField.current.value = "";
        setItems([]);
        setUserInput("");
    };
    // useEffect(() => {
    //     console.log("CREDITS BY ID running");
    //     items.map((item) => {
    //         if (item.media_type == "person") {
    //             return;
    //         } else {
    //             (async () => {
    //                 try {
    //                     const requestUrl = "/api/credits-by-id/" + item.id;
    //                     const credits = await Axios.get(requestUrl);
    //                     console.log(
    //                         "CREDITS ajax done - credits.data",
    //                         credits.data
    //                     );
    //                     console.log(items);
    //                     setCredits(credits.data);
    //                     // let mounted = true;
    //                 } catch (err) {
    //                     console.log("error", err);
    //                 }
    //             })();
    //         }
    //     });
    // }, [items]);
    useEffect(() => {
        console.log("SearchItem useEffect running");
        let ignore = false;
        if (userInput && userInput.length > 3) {
            (async () => {
                try {
                    console.log("/api/multi-search/ " + userInput);
                    const requestUrl = "/api/multi-search/" + userInput;
                    const searchResults = await Axios.get(requestUrl);
                    console.log("ajax done", searchResults.data);
                    console.log(items);
                    if (!ignore) {
                        //setItems([]);
                        setItems(searchResults.data);
                    } else {
                        console.log("ignored!");
                    }
                } catch (err) {
                    console.log("error", err);
                }
            })();
        } else {
            setTitle("Search for your recommendation:");
            // const formData = new FormData();
            // formData.append(("userInput", userInput));
            console.log("now go an get the ones i am searching for, maDUDE");
            const requestUrl = "/api/find-users/" + userInput;

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
        return () => {
            console.log("cleanup running");
            ignore = true;
        };
    }, [userInput]);

    return (
        <div className="search-container">
            <p>
                {/* {(recommendItem && recommendItem.original_name) ||
                    recommendItem.original_title} */}
            </p>
            <div className="column">
                <input
                    ref={searchField}
                    onChange={handleChange}
                    name="search"
                    type="text"
                    placeholder="Search ..."
                />
                <p className="powered-by-text-small">
                    Powered by{" "}
                    <img
                        className="powered-by-small"
                        src="/icons/tmdb-short.svg"
                    ></img>
                </p>
                <p>{title}</p>
            </div>
            <div className="result-list">
                {items &&
                    items.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="result-item"
                                onClick={() => handleClick(item)}
                            >
                                <div>
                                    <ItemIcon
                                        item={item}
                                        myClass="icon-search"
                                    />
                                </div>
                                <div>
                                    <strong>
                                        {item.name || item.title}{" "}
                                        <ItemDate item={item} />
                                    </strong>
                                    {/* {movie.original_title && (
                                        <div className="small">
                                            <i>{movie.original_title}</i>
                                        </div>
                                    )} */}
                                    <ItemInfo item={item} />
                                    <div className="small">Id: {item.id}</div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
