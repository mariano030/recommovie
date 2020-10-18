import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecommendItem } from "../redux/actions.js";
import ItemIcon from "../components/ItemIcon.js";
import ItemImage from "../components/ItemImage.js";
import AddMessage from "../components/AddMessage.js";

export default function AddDetails() {
    const recItem = useSelector((state) => state.recItem);
    const selected = useEffect(() => {}, []);
    if (!recItem) {
        return null;
    } else {
        return (
            <>
                <ItemIcon item={recItem} myClass="icon-search" />
                <div className="result-recItem">
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
                            {recItem.media_type != "person" &&
                                recItem.release_date &&
                                " (" +
                                    recItem.release_date.substring(0, 4) +
                                    ")"}
                        </strong>

                        <div className="small">Id: {recItem.id}</div>
                        {recItem && (
                            <ItemImage
                                item={recItem}
                                type="backdrop"
                                myClass=""
                            />
                        )}
                    </div>
                    <AddMessage />
                </div>
            </>
        );
    }
}
