import React from "react";
import { useState, useEffect } from "react";

export default function TextField(props) {
    const { name, onChange, placeholder, label } = props;
    return (
        <>
            <label>{label}</label>
            <input
                type="text"
                name={name}
                placholder={placeholder}
                onChange={onChange}
            ></input>
        </>
    );
}
