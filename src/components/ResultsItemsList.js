import React from "react";
import { useDispatch, useSelector } from "react-redux";

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

export default function ResultsItemsList(props) {
    // const { items, item } = props;
    //console.log("items: ", items);
    const classes = useStyles();
    // const { genres } = useSelector((state) => {
    //     state.genres;
    // });

    return (
        <List key={"4"} className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="Remy Sharp"
                        src="/icons/media_type_movie.svg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary="A Prophet (2009)"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="caption"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {" — Un prophète (original title)"}
                            </Typography>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                <br></br>
                                Jacques Audiard
                                {/* {item.genre_ids &&
                                    item.genre_ids.map((id) => {
                                        return genres[id] + ", ";
                                    })} */}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="Travis Howard"
                        src="/icons/media_type_tv.svg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="Cindy Baker"
                        src="/icons/media_type_person.svg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Sandra Adams
                            </Typography>
                            {
                                " — Do you have Paris recommendations? Have you ever…"
                            }
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}
