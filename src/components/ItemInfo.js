import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecommendItem } from "../redux/actions.js";

export default function ItemInfo(props) {
    const { item, myClass } = props;
    const recItem = useSelector((state) => state.recItem);
    const credits = useState(credits);
    let director = {};
    useEffect(() => {
        console.log("ItemInfo useEffect running");
        if (credits && credits.crew) {
            let [director] = credits.crew.map((credit) => {
                if (credit.department == "Directing") {
                    return credit;
                }
            });
            console.log("director", director);
        }
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
                                {director.name}
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
