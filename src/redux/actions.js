import axios from "../axios";

export async function getFriendsList() {
    // hier kann ich alles machen!
    console.log("AAA - getFriendsList running");
    try {
        const result = await axios.get("/api/get-friends-list");
        console.log("result", result);
        console.log("esult.data.friendsRawArr?", result.data.friendsRawArr);
        const allFriendsAndRequests = result.data.friendsRawArr;
        return {
            type: "GET_FRIENDS_LIST",
            payload: allFriendsAndRequests,
        };
    } catch (err) {
        console.log("error in getFriendsList", err);
    }
}

export function setAspects(array) {
    console.log("AA setAspects ", array);
    return {
        type: "SET_ASPECTS",
        payload: array,
    };
}

export function setGenres(array) {
    console.log("AA setGenres ", array);
    return {
        type: "SET_GENRES",
        payload: array,
    };
}

export function setRecItem(item) {
    console.log("AA setRecommendItem ", item);
    return {
        type: "SET_REC_ITEM",
        payload: item,
    };
}

export function addSelectedAspect(item) {
    console.log("AA setRecommendItem ", item);
    return {
        type: "ADD_SELECTED_ASPECT",
        payload: item,
    };
}

// export function setRecCredits(item) {
//     console.log("AA setRecommendItem ", item);
//     return {
//         type: "SET_REC_ITEM",
//         payload: item,
//     };
// }
