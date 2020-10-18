import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecItem } from "../redux/actions.js";
import MediaTypeIcon from "./MediaTypeIcon.js";

import Axios from "../axios";
import MediaTypeInfo from "./MediaTypeInfo.js";
import MediaTypeDate from "./MediaTypeDate.js";
export default function SearchMovies() {
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState("");
    const [title, setTitle] = useState("Most recently registered Users:");
    const [movies, setMovies] = useState([]);
    const recItem = useSelector((state) => state.recItem);
    //const [recommend, setRecommend] = useState({});
    //const [mounted, setMounted] = useState("");
    const handleChange = (e) => {
        setUserInput(e.target.value);
    };
    const handleClick = (movie) => {
        console.log("handleClick running");
        dispatch(setRecItem(movie));
        setUserInput(" ");
    };
    useEffect(() => {
        console.log("useEffect running");
        let ignore = false;
        if (userInput && userInput.length > 3) {
            (async () => {
                try {
                    console.log("ajax about to start!");
                    const requestUrl = "/api/multi-search/" + userInput;

                    const searchResults = await Axios.get(requestUrl);
                    console.log("ajax done", searchResults.data);
                    console.log("searchResults: ", searchResults.data);
                    setMovies([]);
                    setMovies(searchResults.data);
                    console.log(movies);
                    let mounted = true;
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
                {movies &&
                    movies.map((movie, i) => {
                        return (
                            <div
                                key={i}
                                className="result-item"
                                onClick={() => handleClick(movie)}
                            >
                                <div>
                                    <MediaTypeIcon
                                        item={movie}
                                        myClass="icon-search"
                                    />
                                </div>
                                <div>
                                    <strong>
                                        {movie.name || movie.title}{" "}
                                        <MediaTypeDate item={movie} />
                                    </strong>
                                    {/* {movie.original_title && (
                                        <div className="small">
                                            <i>{movie.original_title}</i>
                                        </div>
                                    )} */}
                                    <MediaTypeInfo item={movie} />
                                    <div className="small">Id: {movie.id}</div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
