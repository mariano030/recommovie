import React from "react";

export default function ItemTitle(props) {
    const { item, type, myClass } = props;
    //const recItem = useSelector((state) => state.recItem);

    if (!item) {
        return "ler";
    } else {
        if (item.media_type == "person") {
            return [item.name, "/icons/media_type_person.svg"];
        } else if (item.media_type == "tv") {
            return [
                item.title,
                "/icons/media_type_tv.svg",
                item.original_title,
            ];
        } else if (item.media_type == "movie") {
            return [
                item.title,
                "/icons/media_type_movie.svg",
                item.original_title,
            ];
        }
    }

    // title, originalTitle, iconUrl

    // if (item.media_type == "tv" && item.first_air_date) {
    //     return <>{"(" + item.first_air_date.substring(0, 4) + ")"}</>;
    // } else if (item.release_date && item.media_type == "movie") {
    //     return <>{"(" + item.release_date.substring(0, 4) + ")"}</>;
    // } else if (item.media_type != "person") {
    //     return <>{item.name || item.title}</>;
    // }
    // return null;
}
