import React from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecommendItem } from "../redux/actions.js";

export default function ItemInfo(props) {
    const { item, myClass } = props;
    const recItem = useSelector((state) => state.recItem);

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
