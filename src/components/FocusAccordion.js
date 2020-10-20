import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FocusButton from "./FocusButton.js";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function FocusAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        Recommendation focus:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <FocusButton
                            // key={aspect.id}
                            className="aspect-item"
                            label="Cinematography"
                            onClick={() => {
                                this.handleClick(aspect.id);
                            }}
                        />
                        <FocusButton
                            // key={aspect.id}
                            className="aspect-item"
                            label="Art Design"
                            onClick={() => {
                                this.handleClick(aspect.id);
                            }}
                        />
                    </Typography>
                </AccordionDetails>
            </Accordion>{" "}
        </div>
    );
}
