import React from "react";
import { useState, useEffect } from "react";

export default function AddMessage(props) {
    const { name, onChange } = props;
    // if (!item) {
    //     return null;
    // } else {
    let buttonLabel = "OK";
    //let buttonLabel = "OK";
    const toggleButtonLabel = () => {
        console.log("toggeling");
        // if (buttonLabel == "OK") {
        //     buttonLabel = "EDIT";
        // } else {
        //     buttonLabel = "EDIT";
        // }
        buttonLabel = "EDIT";
    };

    return (
        <>
            AddMessage
            <input
                type="text"
                name={name}
                placholder="personal message"
                onChange={onChange}
            ></input>
            <button type="button" onClick={toggleButtonLabel}>
                {buttonLabel}
            </button>
        </>
    );
    // }
}
