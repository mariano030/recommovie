import React from "react";
import { useState, useEffect } from "react";

export default function SelectFocus(props) {
    const { name, onChange, placeholder, label } = props;
        useEffect(()=> {
            (async ()=>{
                                try {
                    const requestUrl = "/api/get-aspects/";
                    const aspects = await Axios.get(requestUrl);
                    console.log(
                        "CREDITS ajax done - aspects.rows",
                        aspects.rows
                    );
                    }
                } catch (err) {
                    console.log("error", err);
                }
            }) )();

    return (
        <>
            <ul>
                {aspects && aspects.map((aspect)=> <div>{aspect.aspect}</div>)}
            </ul>

        </>
    );
}
