//src/redux/reducer.js

import { addSelectedAspect } from "./actions";

export default function reducer(state = {}, action) {
    // this is where the reducer takes current state
    // copies the current state
    // modifies the copy of the current state
    // returns modified state (as new current state)
    switch (action.type) {
        //     case "SET_OTHER_USER":
        //         console.log("RRR SET_OTHER_USER", action.payload);
        //         state = {
        //             ...state,
        //             otherUser: action.payload,
        //         };
        //         break;
        // }
        case "GET_FRIENDS_LIST":
            // what what?
            console.log("friendsRaw in reducer");
            console.log(
                "reducer saying action.allFriendsAndRequests",
                action.payload
            );
            state = {
                ...state,
                allFriendsAndRequests: action.payload, // whatever you called the key in actions.js
            };
            break;
        case "SET_REC_ITEM":
            // what what?
            console.log("RRR SET_REC_ITEM");
            console.log("reducer saying action.payload", action.payload);
            state = {
                ...state,
                recItem: action.payload, // whatever you called the key in actions.js
            };
            break;
        case "SET_ASPECTS":
            console.log("reducer -> SET_ASPECTS");
            console.log("reducer saying action.payload", action.payload);
            state = {
                ...state,
                aspects: action.payload, // whatever you called the key in actions.js
            };
            break;
        case "SET_GENRES":
            console.log("reducer -> SET_GENRES");
            console.log("reducer saying action.payload", action.payload);
            state = {
                ...state,
                genres: action.payload, // whatever you called the key in actions.js
            };
            break;
        case "ADD_SELECTED_ASPECT":
            console.log("reducer -> ADD_SELECTED_ASPECT");
            state.addSelectedAspect.push(item),
                (state = {
                    ...state,
                    ...addSelectedAspects.push(item),
                });
    }
    return state;
}

// type: "LOAD_TEN",
// payload: messages,

/// REDUCER NIMMT DATEN AN UND UPDATED STATE

// var ob = {
//     name: "Andrea",
// };

// // 1. SPREAD OPERATOR (shallow copy)
// var newObj = {
//     ...obj,
// };

// var newObj = {
//     ...obj,
//     last: "Arias",
// };

// var arr = [1, 2, 3];
// var newArr = [...arr];
// var newArrImproved = [...arr, 4];

// 2. MAP - works on arrays
// is a loop, is handed a function, returns a new array
// useful for cloning looping and changing element in array

// 2. FILTER
// also a loop
// creates a copy of the array that you 're looping over and
// then REMOVES  things from the copy

// mount -> dispatch -> action.js (has server request inside)
// received data will be sent to reducer
// reducer changes the state (with new copy)

// newly modified state is handed to redux
