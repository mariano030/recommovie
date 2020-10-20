import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ItemImage(props) {
    const recItem = useSelector((state) => state.recItem);
    //const { size = "w780/", myClass, type = "backdrop" } = props;
    //const [imgUrl, setImgUrl] = useState("");
    let size = "w780/";
    let type = "backdrop";
    const [baseUrl] = useState("https://image.tmdb.org/t/p/");
    //const [size] = useState("w780/");
    let url; // = baseUrl, size, url;
    //const recItem = useSelector((state) => state.recItem);
    if (type == "poster") {
        url = `${baseUrl}${size}${recItem.poster_path}`;
    } else if (type == "backdrop") {
        url = `${baseUrl}${size}${recItem.backdrop_path}`;
        // const url = useState(baseUrl + size + props.item.backdrop_path);
    }
    console.log("url                ", url);
    // const url = props.item[imgUrl];
    console.log(url);
    if (!recItem) {
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
