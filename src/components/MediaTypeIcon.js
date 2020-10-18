import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecommendItem } from "../redux/actions.js";

export default function MediaTypeIcon(props) {
    const { item, myClass } = props;
    const recItem = useSelector((state) => state.recItem);

    if (!item) {
        return null;
    } else {
        return (
            <>
                <div className="small">
                    {item.media_type == "tv" && (
                        <img
                            className={myClass}
                            src="/icons/media_type_tv.svg"
                        ></img>
                    )}
                    {item.media_type == "movie" && (
                        <img
                            className={myClass}
                            src="/icons/media_type_movie.svg"
                        ></img>
                    )}
                    {item.media_type == "person" && (
                        <img
                            className={myClass}
                            src="/icons/media_type_person.svg"
                        ></img>
                    )}
                </div>
            </>
        );
    }
}
