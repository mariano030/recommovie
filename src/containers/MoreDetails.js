import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import { Link } from "react-router-dom"; // ?? needed ??
import { useDispatch, useSelector } from "react-redux";
import { addRecAspect } from "../redux/actions.js";

import useStatefulFields from "../hooks/useStatefulFields";

import ItemIcon from "../components/ItemIcon.js";
import ItemImage from "../components/ItemImage.js";
import TextField from "../components/TextField";
import InputFieldIcon from "../components/InputFieldIcon.js";
import InputFieldLink from "../components/InputFieldIcon.js";
import TextFieldMessage from "../components/TextFieldMessage.js";
import FocusButton from "../components/FocusButton.js";
import FocusAccordion from "../components/FocusAccordion.js";

export default function MoreDetails() {
    //const { register, handleSubmit, errors } = useForm();

    const [values, handleChange] = useStatefulFields();
    const dispatch = useDispatch();
    //const recAspects = useSelector((state) => state.recAspects);
    const recItem = useSelector((state) => state.recItem);
    const genres = useSelector((state) => state.genres);
    const aspects = useSelector((state) => state.aspects);
    //const selected = useEffect(() => {}, []);
    // const onSubmit = (data) => {
    //     console.log(data);
    // };
    console.log("recItem: ", recItem);
    let iconUrl = "";
    let imgUrl = "";
    useEffect(() => {
        if (!recItem) {
            return;
        }
        console.log("imgUrl", imgUrl);
        let imgUrl = "https://image.tmdb.org/t/p/w780" + recItem.backdrop_path;
        switch (recItem.media_type) {
            case "movie":
                iconUrl = "/icons/media_type_movie.svg";
                break;
            case "tv":
                iconUrl = "/icons/media_type_tv.svg";
                break;
            case "person":
                iconUrl = "/icons/media_type_person.svg";
                break;
        }
    }, [recItem]);

    const handleClick = (id) => {
        console.log("clicked button with id:", id);
        console.log(
            "clicked button with name",
            aspects.filter((aspect) => {
                if (aspect.id == id) {
                    console.log("aspect.name", aspect.name);
                    return aspect;
                }
            })
        );
        const selectedAspect = aspects.filter((aspect) => {
            if (aspect.id == id) {
                console.log("aspect.name", aspect.name);
                return aspect;
            }
        })[0].name;
        dispatch(addRecAspect(selectedAspect));
        console.log("selectedAspect", selectedAspect);
    };

    if (!recItem) {
        return null;
    } else {
        return (
            <>
                <ItemIcon item={recItem} myClass="icon-search" />
                MORE DETAILS
                <div className="result-recItem">
                    <div>
                        <ItemImage
                            item={recItem}
                            myClass="hero-image"
                        ></ItemImage>
                        <div className="small"></div>
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
                        {recItem && <img src={imgUrl}></img>}
                        <div className="genres">
                            genres? // sortieren
                            {recItem.genre &&
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
                    </div>
                    <InputFieldIcon
                        name="recipientName"
                        handleChange={handleChange}
                        label="Your name"
                    />
                    <InputFieldIcon
                        name="recipientName"
                        handleChange={handleChange}
                        label="Friends name"
                    />
                    <TextFieldMessage
                        name="message"
                        handleChange={handleChange}
                        label="Personal message"
                        placeholder="'This is right down your alley ...'"
                    />
                    <InputFieldLink
                        name="customUrl"
                        handleChange={handleChange}
                        label="custom Url"
                    />
                    <FocusAccordion />
                    <div className="column-center">
                        <div className="aspects">
                            {aspects &&
                                aspects.map((aspect) => (
                                    <FocusButton
                                        key={aspect.id}
                                        className="aspect-item"
                                        label={aspect.name}
                                        onClick={() => {
                                            this.handleClick(aspect.id);
                                        }}
                                    />
                                ))}
                        </div>
                        message: {values.message} senderName:{" "}
                        {values.senderName} recipientName {values.recipientName}
                    </div>
                    {/* <div className="genres">{genres && aspects.map(()=> <div className="genre">)}</div> */}
                </div>
            </>
        );
    }
}

// code
// mediaType e_mediaType, - GET
// mediaId INT NOT NULL, - GET
// senderId  INT REFERENCES users(id) NOT NULL, - GET
// recipientId          NULL
// imageType e_imageType, ??
// customImage VARCHAR(255), - save full URL?
// focus INT REFERENCES focus(id), - focus Array!
// message VARCHAR(255),    - ->state
// trailer VARCHAR(255),   ???
// location VARCHAR(255),   ???
// extUrl VARCHAR(255),     DOZ IT
// senderRating INT,        - SENDER RATING??
// recipientRating INT,
