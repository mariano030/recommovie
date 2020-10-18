import React from "react";
import { useState, useEffect } from "react";

export default function ItemPoster(props) {
    const { item, myClass, type } = props;
    const [imgUrl, setImgUrl] = useState("");
    const [baseUrl] = useState("https://image.tmdb.org/t/p/");
    const [size] = useState("w780/");
    const url = useState(baseUrl, size, url);
    //const recItem = useSelector((state) => state.recItem);
    if (type == "poster") {
        const url = `${baseUrl}${size}${props.item.poster_path}`;
    } else if (type == "backdrop") {
        const url = `${baseUrl}${size}${props.item.backdrop_path}`;
        // const url = useState(baseUrl + size + props.item.backdrop_path);
    }
    console.log("url                ", url);
    // const url = props.item[imgUrl];
    console.log(url);
    if (!item) {
        return null;
    } else {
        return (
            <>
                <img
                    className={props.myClass}
                    src={url} //baseUrl + size + props.item[imgUrl]}
                />
            </>
        );
    }
}
