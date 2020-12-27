import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecommendItem } from "../redux/actions.js";

import { makeStyles } from "@material-ui/core/styles";
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

export default function ItemInfo(props) {
    const classes = useStyles();
    console.log("ItemInfo RUNNNNNNNNNNING");
    const { item, myClass } = props;
    const recItem = useSelector((state) => state.recItem);
    let director = {};

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
