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
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
    red: {
        color: "white",
        backgroundColor: "#d44d5c",
    },
}));

export default function ResultItem({ item }) {
    const genres = useSelector((state) => state.genres);

    //const [title, originalTitle, iconUrl] = ItemTitle(item);
    const classes = useStyles();
    //console.log("itemDate", <ItemDate item={item} />);
    const recItem = useSelector((state) => state.recItem);
    // const genres = useSelector((state) => {
    //     state.genres;
    // });

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
    let key = item.id * item.vote_average;
    return (
        <>
            <ListItem key={key.id} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar className={classes.red}>
                        <img src={iconUrl} className="icon-search"></img>
                    </Avatar>
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
                                <i>
                                    {item.original_title && " — "}
                                    {item.original_title &&
                                        item.original_title}{" "}
                                    {item.original_name && " — "}
                                    {item.original_name &&
                                        item.original_name}{" "}
                                    {item.known_for_department &&
                                        item.known_for_department}{" "}
                                    {/* {" — " +
                                    <ItemTitle item={item} type={original} /> +
                                    " (original title)"} */}
                                </i>
                            </Typography>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {/* <br></br> */}

                                {/* {item.genre_ids &&
                                    item.genre_ids.map((genreId, i) => (
                                        <Box
                                            key={i}
                                            component="div"
                                            display="inline"
                                            fontWeight="fontWeightLight"
                                            fontSize={10}
                                            p={1}
                                            m={1}
                                            // cssStyle={{ bgcolor: "yellow" }}
                                            bgcolor="white"
                                            // bgcolor="background.paper"
                                            // cssStyle={class: "genre-item"}
                                        >
                                            {genres.map((item) => {
                                                if (item.id == genreId) {
                                                    return item.name;
                                                }
                                            })}
                                        </Box>
                                    ))} */}
                                {/* {genres &&
                                    genres.map((item) => {
                                        if (item.id == genre) {
                                            return item.name;
                                        }
                                    })} */}
                                {/* {genres &&
                                    item.genre_ids &&
                                    item.genre_ids.map((id) => {
                                        return genres[id].name + ", ";
                                    })} */}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider />
        </>
    );
}
