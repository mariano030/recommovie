import React from "react";
import { useDispatch, useSelector } from "react-redux";

// components
//import ItemDate from "./ItemDate";
import ItemTitle from "./itemTitle";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
}));

export default function ResultItem(props) {
    const { item } = props;
    //const [title, originalTitle, iconUrl] = ItemTitle(item);
    const classes = useStyles();
    //console.log("itemDate", <ItemDate item={item} />);
    const recItem = useSelector((state) => state.recItem);
    const genres = useSelector((state) => {
        state.genres;
    });

    // title date logic
    let itemDate = "";
    let iconUrl = "";
    if (!item) {
        return null;
    } else if (item.media_type == "tv" && item.first_air_date) {
        // itemUrl = "/icons/media_type_tv.svg";
        itemDate = "(" + item.first_air_date.substring(0, 4) + ")";
    } else if (item.release_date && item.media_type == "movie") {
        // itemUrl = "/icons/media_type_movie.svg";
        itemDate = "(" + item.release_date.substring(0, 4) + ")";
    } else if (item.media_type == "person") {
        // just for laughs
        // itemUrl = "/icons/media_type_person.svg";
    }

    switch (item.media_type) {
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

    return (
        <>
            <ListItem key={item.id} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={iconUrl} />
                </ListItemAvatar>
                <ListItemText
                    primary={item.name || item.title + " " + itemDate}
                    // {
                    // item.name || (item.title && item.title + <ItemDate />)
                    // }
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="caption"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {item.original_title && " — "}
                                {item.original_title &&
                                    item.original_title}{" "}
                                {/* {" — " +
                                    <ItemTitle item={item} type={original} /> +
                                    " (original title)"} */}
                            </Typography>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                <br></br>
                                Genres:
                                {genres &&
                                    item.genre_ids &&
                                    item.genre_ids.map((id) => {
                                        return genres[id].name + ", ";
                                    })}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </>
    );
}
