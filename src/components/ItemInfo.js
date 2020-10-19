import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecommendItem } from "../redux/actions.js";

import Axios from "../axios";

export default function ItemInfo(props) {
    const [credits, setCredits] = useState({}); // useState(credits)
    const { item, myClass } = props;
    const recItem = useSelector((state) => state.recItem);
    let director = {};
    useEffect(() => {
        console.log("CREDITS BY ID running");
        if (item.media_type == "person") {
            return;
        } else {
            console.log("getting CREDITS for ", item.id);
            (async () => {
                try {
                    const requestUrl = "/api/credits-by-id/" + item.id;
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
    }, [item]);
    useEffect(() => {
        console.log("ItemInfo useEffect running");
    });
    if (!item) {
        return null;
    } else {
        return (
            <>
                <div className="small">
                    {item.media_type == "tv" && (
                        <div className="small">
                            <i>~{item.original_name}</i>
                        </div>
                    )}
                    {item.media_type == "movie" && (
                        <div className="small">
                            <i>
                                ~{item.original_title} (
                                {item.original_language.toUpperCase()})
                            </i>
                            <div>
                                {item.genre_ids}
                                where is the director? {director.name}
                            </div>
                        </div>
                    )}
                    {item.media_type == "person" && (
                        <div className="small">
                            <i>~{item.known_for_department}</i>
                        </div>
                    )}
                </div>
            </>
        );
    }
}
