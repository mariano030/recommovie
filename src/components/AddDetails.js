import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecommendItem } from "../redux/actions.js";
import MediaTypeIcon from "./MediaTypeIcon.js";
import ItemPoster from "./ItemPoster.js";

export default function AddDetails() {
    const recItem = useSelector((state) => state.recItem);
    const selected = useEffect(() => {}, []);
    if (!recItem) {
        return null;
    } else {
        return (
            <>
                <MediaTypeIcon item={recItem} myClass="icon-search" />
                <div
                    className="result-recItem"
                    onClick={() => handleClick(recItem)}
                >
                    <div>
                        <div className="small">
                            {recItem.media_type == "tv" && (
                                <img
                                    className="icon-search"
                                    src="/icons/tv.svg"
                                ></img>
                            )}
                            {recItem.media_type == "recItem" && (
                                <img
                                    className="icon-search"
                                    src="/icons/recItem.svg"
                                ></img>
                            )}
                        </div>
                    </div>
                    <div>
                        <strong>
                            {recItem.original_name || recItem.original_title}
                            {recItem.media_type == "recItem" &&
                                recItem.release_date &&
                                " (" +
                                    recItem.release_date.substring(0, 4) +
                                    ")"}
                        </strong>

                        <div className="small">Id: {recItem.id}</div>
                        {recItem && <ItemPoster item={recItem} myClass="" />}
                    </div>
                </div>
            </>
        );
    }
}
