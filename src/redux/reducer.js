//src/redux/reducer.js

import { addSelectedAspect } from "./actions";

export default function reducer(state = { recData: {} }, action) {
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
                allFriendsAndRequests: action.payload, 
            };
            break;
        case "SET_REC_ITEM_REC_DATA":
            // what what?
            console.log("SET_REC_ITEM_REC_DATA");
            console.log("reducer saying action.payload", action.payload);

            console.log(action.payload.media_type);
            state = {
                ...state,
                recItem: action.payload,
                recData: {
                    ...state.recData,
                    itemId: action.payload.id,
                    mediaType: action.payload.media_type,
                },
            };

            break;
        case "SET_MORE_DETAILS":
            console.log("SET more DETIALS runnin...")
            state = {
                ...state,
                recItem: {
                    ...state.recItem,
                    details: action.payload,
                },
            };
            console.log("action.payload in rdc", action.payload)
            break;
            case "SET_ASPECTS_AND_GENRES":
            console.log("reducer -> SET_ASPECTS");
            console.log("reducer saying action.payload", action.payload);
            state = {
                ...state,
                genres: action.payload[0], 
                // recItem: {
                //     ...recItem,
                    aspects: action.payload[1], 
                                // }
            };
            break;
        // case "SET_ASPECTS":
        //     console.log("reducer -> SET_ASPECTS");
        //     console.log("reducer saying action.payload", action.payload);
        //     state = {
        //         ...state,
        //         aspects: action.payload, 
        //     };
        //     break;
        // case "SET_GENRES":
        //     console.log("reducer -> SET_GENRES");
        //     console.log("reducer saying action.payload", action.payload);
        //     state = {
        //         ...state,
        //         genres: action.payload, 
        //     };
        //     break;
        case "ADD_REC_ASPECT":
            console.log("reducer -> ADD_REC_ASPECT");
            console.log(action.payload);
            state = {
                ...state,
                recAspects: [...state.recAspects, action.payload],
            };
            break;
        case "SET_REC_MESSAGE":
            console.log("reducer -> SET_REC_MESSAGE");
            console.log(action.payload);
            state = {
                ...state,
                recMessage: action.payload,
            };
            break;
        case "ADD_TO_REC_DATA":
            console.log("reducer -> SET_REC_MESSAGE");
            console.log(action.payload);
            state = {
                ...state,
                recData: {
                    ...state.recData,
                    ...action.payload,
                },
            };
            break;
        case "SET_NEW_REC_LINK":
            console.log("reducer -> SET_REC_MESSAGE");
            console.log(action.payload);
            state = {
                ...state,
                recLink: action.payload,
            };
            break;
        case "TOGGLE_ASPECT":
            console.log(action.payload);
            state = {
                ...state,
                aspects: [
                    ...state.aspects.slice(0, action.payload),
                    {
                        ...state.aspects[action.payload],
                        status: !state.aspects[action.payload].status,
                    },
                    ...state.aspects.slice(action.payload + 1),
                ],
            };
            break;
        case "SET_REC_DATA_FULL":
            console.log("reudcer", "SET_REC_DATA_FULL", action.payload);
            console.log(
                "put this in redux-state as recData action.payload.recData,",
                action.payload.recData
            );
            state = {
                ...state,
                recItem: action.payload,
                recData: action.payload.recInfos,
            };
            break;
    }
    return state;
}

// SET_REC_MESSAGE

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
