import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { setRecommendItem } from "../redux/actions.js";

import useStatefulFields from "../hooks/useStatefulFields";

import ItemIcon from "../components/ItemIcon.js";
import ItemImage from "../components/ItemImage.js";
import TextField from "../components/TextField";
//delete me soon:
import AddMessage from "../components/AddMessage.js";

export default function AddDetails() {
    //const { register, handleSubmit, errors } = useForm();

    const [values, handleChange] = useStatefulFields();
    const dipatch = useDispatch();
    const recItem = useSelector((state) => state.recItem);
    const genres = useSelector((state) => state.genres);
    const aspects = useSelector((state) => state.aspects);
    //const selected = useEffect(() => {}, []);
    // const onSubmit = (data) => {
    //     console.log(data);
    // };
    const handleClick = (id) => {
        console.log("clicked button with id:", id);
        console.log(
            "clicked button with name",
            aspects.filter((aspect) => {
                if (aspect.id == id) {
                    return aspect;
                    console.log("aspect.name", aspect.name);
                }
            })
        );
        const selectedAspect = aspects.filter((aspect) => {
            if (aspect.id == id) {
                return aspect;
                console.log("aspect.name", aspect.name);
            }
        })[0].name;
        dispatch(addSelectedAspect(selectedAspect));
        console.log("selectedAspect", selectedAspect);
    };

    if (!recItem) {
        return null;
    } else {
        return (
            <>
                <ItemIcon item={recItem} myClass="icon-search" />
                <div className="result-recItem">
                    <div>
                        <ItemImage item={recItem}></ItemImage>
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
                    message: {values.message} senderName: {values.senderName}{" "}
                    recipientName {values.recipientName}
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
                    {/* <input
                        type="text"
                        name="message"
                        placeholder="your personal message"
                        onChange={handleChange}
                    ></input> */}
                    <div className="column-center">
                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="personal message"
                                name="message"
                                ref={register}
                            ></input>
                        </form>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="your name"
                                name="senderName"
                                ref={register}
                            ></input>
                        </form>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="recommendation for"
                                name="receiverName"
                                ref={register}
                            ></input>
                        </form> */}
                        <TextField
                            name="senderName"
                            onChange={handleChange}
                            placeholder="moviebuff3000"
                            label="Your name: "
                        />
                        <TextField
                            name="recipientName"
                            onChange={handleChange}
                            placeholder="Who is this recommendation for?"
                            label="Recipient name: "
                        />
                        <TextField
                            name="message"
                            onChange={handleChange}
                            placeholder="Add personal message..."
                            label="Personal message: "
                        />
                        <div className="genres">
                            {recItem &&
                                recItem.genre_ids.map((genreId) => (
                                    <div className="genre-item" key={genreId}>
                                        {genres.map((item) => {
                                            if (item.id == genreId) {
                                                return item.name;
                                            }
                                        })}
                                    </div>
                                ))}
                        </div>
                        <div className="aspects">
                            {aspects &&
                                aspects.map((aspect) => (
                                    <button
                                        className="aspect-item"
                                        key={aspect}
                                        onClick={() => {
                                            handleClick(aspect.id);
                                        }}
                                    >
                                        {aspect.name}
                                    </button>
                                ))}
                        </div>
                    </div>
                    {/* <div className="genres">{genres && aspects.map(()=> <div className="genre">)}</div> */}
                </div>
            </>
        );
    }
}
