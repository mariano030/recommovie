import React from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import ItemIcon from "../components/ItemIcon.js";
import ItemImage from "../components/ItemImage.js";

export default function MoreInfoMovie() {
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
                                    {" "}
                                    ({recItem.release_date.slice(0,4)})
                                </Typography>
                                <Typography variant="h7">
                                    — {recItem.original_name ||
                                        recItem.original_title}
                                    {" "}
                                    {/* ({recItem.release_date.slice(0,4)}) */}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="credits-container">

                        <div className="credits-crew-small">
                            <div className="iconic">

                                        <img
                                            alt="Directed by"
                                            title="Directed by"
                                            src="/icons/credits-director.svg"
                                            className="icon-tiny"
                                        ></img>
                            </div>
                            <div className="text">

                                    {recItem.details && recItem.details.cast &&
                                        recItem.details.crew.map((castMem, i) => {
                                            if (castMem.job == "Director") {
                                                let rety = castMem.name + " ";
                                                return rety;
                                            }
                                        })}
                                    {"  "}
                            </div>
                            <div className="iconic">                                   
                                        <img
                                            alt="Director of Photography"
                                            title="Director of Photography"
                                            src="/icons/credits-camera.svg"
                                            className="icon-tiny"
                                        ></img>
                            </div>
                        <div className="credits-crew-small">

                                    {recItem.details && recItem.details.cast &&
                                        recItem.details.crew.map((castMem, i) => {
                                            if (
                                                castMem.job ==
                                                "Director of Photography"
                                            ) {
                                                let rety = castMem.name + " ";
                                                return rety;
                                            } else if (
                                                                                                castMem.job ==
                                                "Cinematography"
                                            ) {
                                                let rety = castMem.name + " ";
                                                return rety;
                                            }
                                        })}
                            </div>
                            
                        </div>
                        <div className="credits-crew-small">
                                    {recItem.details && recItem.details.cast && (
                                        <img
                                            alt="Cast"
                                            title="Cast"
                                            src="/icons/credits-cast.svg"
                                            className="icon-tiny"
                                        ></img>
                                    )}
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
            </>
        );
    }
}
