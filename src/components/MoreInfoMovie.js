import React from "react";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";


export default function MoreInfoMovie() {
    const recItem = useSelector((state) => state.recItem);

    if (!recItem) {
        return null;
    } else {
        return (
            <>
                <div className="small">
                    <div className="credits-crew-small">
                        <div className="iconic">

                                    <img
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
                                        }
                                    })}
                        </div>
                        
                    </div>
                    <div className="credits-crew-small">
                                {recItem.details && recItem.details.cast && (
                                    <img
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
            </>
        );
    }
}
