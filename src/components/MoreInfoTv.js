import React from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import ItemIcon from "../components/ItemIcon.js";
import ItemImage from "../components/ItemImage.js";

import Genres from "../components/Genres.js"

export default function MoreInfoTv() {
    const recItem = useSelector((state) => state.recItem);

    if (!recItem) {
        return null;
    } else {
        return (
            <>
                <div className="small">
                    <div className="result-recItem">
                        <div className="vertical-center">
                            <ItemImage
                                item={recItem}
                                myClass="hero-image"
                            ></ItemImage>

                        </div>
                        <div className="row-start">
                            <div>
                                <ItemIcon item={recItem} myClass="icon-black" />
                            </div>
                            <div className="item-title">
                                <Typography variant="h5">
                                    {recItem.name ||
                                        recItem.title}
                                    {/* {recItem.media_type != "person" && {
                                        recDate,
                                    }} */}{" "}
                                    ({recItem.first_air_date.slice(0,4)})
                                </Typography>
                                <Typography variant="h7">
                                    — {recItem.original_name ||
                                        recItem.original_title}
                                    {/* {recItem.media_type != "person" && {
                                        recDate,
                                    }} */}{" "}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="credits-container">

                    <div className="credits-crew-small">
                        <div className="iconic">
                                {recItem.details && recItem.details.created_by && recItem.details.created_by.length > 0 && (
                                    <img
                                        src="/icons/details-quill.svg"
                                        className="icon-tiny"
                                        title="Created by"
                                        alt="Created by"
                                    ></img>
                                )}

                        </div>
                        <div className="text">
                                {recItem.details && recItem.details.created_by && recItem.details.created_by.length > 0 &&
                                    recItem.details.created_by.map((creator, i) => {
                                        if (i < recItem.details.created_by.length -1) {
                                            return creator.name + ", "
                                        }
                                        else return creator.name
                                    }
                                    )
                                    }

                        </div>

                    </div>
                    {/* copy of movie cast display */}
                    <div className="credits-crew-small">
                        <div className="iconic">
                                {recItem.details && recItem.details.cast && (
                                    <img
                                        src="/icons/credits-cast.svg"
                                        className="icon-tiny"
                                        alt="Cast"
                                        title="Cast"
                                    ></img>
                                )}
                        </div>
                        <div className="text">
                                {recItem.details && recItem.details.cast &&
                                    recItem.details && recItem.details.cast
                                        .slice(0, 4)
                                        .map((castMem, i) => {
                                            i < 5;
                                            let rety = castMem.name + ", ";
                                            return rety;
                                        })}
                                {recItem.details && recItem.details.cast &&
                                    recItem.details && recItem.details.cast
                                        .slice(4, 5)
                                        .map((castMem, i) => {
                                            let rety = castMem.name + " ";
                                            return rety;
                                        })}
                        </div>

                    </div>
                    </div>
                </div>
            </>
        );
    }
}
