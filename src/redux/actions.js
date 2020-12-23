import axios from "../axios";
//BEISPIEL AUS SOME
export async function getFriendsList() {
    // hier kann ich alles machen!
    console.log("AAA - getFriendsList running");
    try {
        const result = await axios.get("/api/get-friends-list");
        console.log("result", result);
        console.log("result.data.friendsRawArr?", result.data.friendsRawArr);
        const allFriendsAndRequests = result.data.friendsRawArr;
        return {
            type: "GET_FRIENDS_LIST",
            payload: allFriendsAndRequests,
        };
    } catch (err) {
        console.log("error in getFriendsList", err);
    }
}
// MEIN ACUTAL CALL
export async function getMoreDetails(recItem) {
                    try {
                        let requestUrl = "/api/tv-details-by-id/" + recItem.id;
                        console.log("TV SHOW ID", recItem.id);
                        console.log("requestUrl: ", requestUrl);
                        const detailsResults = await Axios.get(requestUrl);
                        console.log(
                            "DETAILS ajax done - details.data",
                            detailsResults.data
                        );
                        // let mounted = true;
                        return {
                            type: "SET_MORE_DETAILS",
                            payload: detailsResults.data
                        };
                    } catch (err) {
                        console.log("error", err);
                    }
}

export async function getMoreDetails2(){
    if (recItem && recItem.media_type == "tv") {
                    try {
                        let requestUrl = "/api/tv-details-by-id/" + recItem.id;
                        console.log("TV SHOW ID", recItem.id);
                        console.log("requestUrl: ", requestUrl);
                        const detailsResults = await Axios.get(requestUrl);
                        console.log(
                            "DETAILS ajax done - details.data",
                            detailsResults.data
                        );
                        // let mounted = true;
                        return {
                            type: "SET_MORE_DETAILS",
                            payload: detailsResults.data
                        };
                    } catch (err) {
                        console.log("error", err);
                    }

    } else if (recItem && recItem.media_type == "movie") {

                    try {
                        let requestUrl = "/api/movie-details-by-id/" + recItem.id;
                        console.log("MOVIE ID", recItem.id);
                        console.log("requestUrl: ", requestUrl);
                        const detailsResults = await Axios.get(requestUrl);
                        console.log(
                            "DETAILS ajax done - details.data",
                            detailsResults.data
                        );
                        // let mounted = true;
                        return {
                            type: "SET_MORE_DETAILS",
                            payload: detailsResults.data
                        };
                    } catch (err) {
                        console.log("error", err);
                    }

    } else if (recItem && recItem.media_type == "person") {
                    try {
                        let requestUrl = "/api/person-credits-by-id/" + recItem.id;
                        console.log("PERSON ID", recItem.id);
                        console.log("requestUrl: ", requestUrl);
                        const detailsResults = await Axios.get(requestUrl);
                        console.log(
                            "DETAILS ajax done - details.data",
                            detailsResults.data
                        );
                        // let mounted = true;
                        return {
                            type: "SET_MORE_DETAILS",
                            payload: detailsResults.data
                        };
                    } catch (err) {
                        console.log("error", err);
                    }
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

export function setRecItemRecData(item) {
    console.log("AA setRecommendItem ", item);
    return {
        type: "SET_REC_ITEM_REC_DATA",
        payload: item,
    };
}

export function addRecAspect(item) {
    console.log("AA addRecAspect ", item);
    return {
        type: "ADD_REC_ASPECT",
        payload: item,
    };
}

export function setRecMessage(message) {
    console.log("AA addRecMessage - adding:", message);
    return {
        type: "SET_REC_MESSAGE",
        payload: message,
    };
}

export function addToRecData(nameValueObj) {
    console.log("AA addRecMessage - adding:", nameValueObj);
    return {
        type: "ADD_TO_REC_DATA",
        payload: nameValueObj,
    };
}

export function setRecLink4(link) {
    console.log("AA  setRecLink(link)  - adding:", link);
    return {
        type: "SET_NEW_REC_LINK",
        payload: link,
    };
}

export function setRecDataFull(recItem) {
    console.log("action setRecDataFull triggered");
    return {
        type: "SET_REC_DATA_FULL",
        payload: recItem,
    };
}

export function aspectStatusToggle(i) {
    console.log("AA  aspectStatusToggle(i)  - toggeling:", i);
    return {
        type: "TOGGLE_ASPECT",
        payload: i,
    };
}

// export function setRecCredits(item) {
//     console.log("AA setRecommendItem ", item);
//     return {
//         type: "SET_REC_ITEM",
//         payload: item,
//     };
// }
