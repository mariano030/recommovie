// import { decodeBase64 } from "bcryptjs";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Axios from "../axios.js";

// function GetAspects() {
//     console.log("GetAspects Hook running");
//     const dispatch = useDispatch();

//     useEffect(() => {
//         async () => {
//             try {
//                 const aspectsResults = await axios.get("/api/get-aspects/");
//                 console.log(
//                     "functiongetAspects -> aspectsResults",
//                     aspectsResults
//                 );
//                 dispatch(setAspects(aspectsResults.rows));
//             } catch (err) {
//                 console.log("function getAspects -> err", err);
//             }
//             return null;
//         };
//     });
// }

// export default GetAspects;
