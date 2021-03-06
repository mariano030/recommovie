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

export async function getMoreDetails(recItem) {
    if (recItem && recItem.media_type == "tv") {
                    try {
                        let requestUrl = "/api/tv-details-by-id/" + recItem.id;
                        console.log("TV SHOW ID", recItem.id);
                        console.log("requestUrl: ", requestUrl);
                        const detailsResults = await axios.get(requestUrl);
                        console.log(
                            "DETAILS ajax done - details.data",
                            detailsResults.data
                        );
                        requestUrl = "/api/tv-credits-by-id/" + recItem.id;
                        const creditsResults = await axios.get(requestUrl);
                        // let mounted = true;
                        detailsResults.data = {
                            ...detailsResults.data,
                            cast: creditsResults.data.cast,
                        }
                        return {
                            type: "SET_MORE_DETAILS",
                            payload: detailsResults.data
                        };
                    } catch (err) {
                        console.log("error", err);
                    }

    } else if (recItem && recItem.media_type == "movie") {
        console.log("movie detected");
                    try {
                        let requestUrl = "/api/movie-credits-by-id/" + recItem.id;
                        console.log("MOVIE ID", recItem.id);
                        console.log("requestUrl: ", requestUrl);
                        const detailsResults = await axios.get(requestUrl);
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
                        const detailsResults = await axios.get(requestUrl);
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

export async function getVideos(recItem) {
    let requestUrl = "/api/" + recItem.media_type + "-videos-by-id/" + recItem.id;
    if (recItem.media_type == "movie" || recItem.media_type == "tv") {
        try {
            const videosResults = await axios.get(requestUrl);
            return {
                    type: "SET_VIDEOS",
                    payload: videosResults.data,
            }
        } catch {
            console.log("error axios for media_type-videos-by-id/:")
        }

    }

} 

export function setVideoSelection(slug) {
    console.log("selected slug:", slug);
    return {
        type: "SET_VIDEO_SELECTION",
        palyod: slug,
    };

}

export async function getAspectsAndGenres() {
        console.log("getAspectsAndGenres() running");
    try {
                const aspectsResults = await axios.get("/api/get-aspects/");
                const genresResults = await axios.get("/api/get-genres/");

                return {
                    type: "SET_ASPECTS_AND_GENRES",
                    payload: [genresResults.data.genres, aspectsResults.data.map((aspect) => {
                            return { ...aspect, status: false };
                        })]
                }
                // dispatch(setAspects(aspectsResults.data));
                // dispatch(
                //     setAspectsAndResults(
                //         aspectsResults.data.map((aspect) => {
                //             return { ...aspect, status: false };
                //         })
                //     )
                // );
                // dispatch(setGenres(genresResults.data.genres));
            } catch (err) {
                console.log("error getting aspects or genres -> err", err);
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


export function addToRecData(nameValueObj) {
    console.log("AA addRecMessage or other - adding:", nameValueObj);
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
