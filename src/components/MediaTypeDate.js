import React from "react";

export default function MediaTypeDate(props) {
    const { item, myClass } = props;
    //const recItem = useSelector((state) => state.recItem);

    if (!item) {
        return null;
    } else if (item.media_type == "tv" && item.first_air_date) {
        return <>{"(" + item.first_air_date.substring(0, 4) + ")"}</>;
    } else if (item.media_type == "movie") {
        return <>{"(" + item.release_date.substring(0, 4) + ")"}</>;
    } else if (item.media_type == "person") {
        return <></>;
    }
    return null;
}
