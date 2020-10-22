import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function ViewMessage({ message, senderName }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Box component="span" m={0}>
            <Card className={classes.root} variant="outlined">
                <Box>
                    <div className="card-padding">
                        <i>
                            <Typography variant="h5" component="h2">
                                &quot;{message}&quot;
                            </Typography>
                        </i>
                        <Typography
                            className={classes.pos}
                            color="textSecondary"
                            align="right"
                        >
                            {senderName && "— " + senderName}
                        </Typography>
                    </div>
                </Box>
                {/* <CardContent></CardContent> */}
            </Card>
        </Box>
    );
}
