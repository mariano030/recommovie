import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { LiteYouTubeEmbed } from "react-lite-youtube-embed";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Button from "@material-ui/core/Button";

import { addToRecData } from "../redux/actions.js"

let counter = 0;

export default function ItemVideo() {
    const dispatch = useDispatch();
    useEffect(()=>{console.log("useEFFFECT ItemVideo")
    },[])
    const recItem = useSelector((state) => state.recItem);
    const [selectedVideoSlug, setSelectedVideoSlug] = useState(recItem.videos[counter].key);
    // setSelectedVideoSlug(recItem.videos[0].key);
    const url = "https://www.youtube.com/embed/" + selectedVideoSlug;
    console.log("length", recItem.videos.length)
    //dispatch(getVideos(recItem));
    // https://www.youtube.com/watch?v=
    /* 
    <iframe width="1677" height="629" src="https://www.youtube.com/embed/JqknnUs-ljA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */

    // const incCounter = () => {
    //     console.log("increase counter...")
    //     if (counter == recItem.videos.length-1) {
    //         counter = 0;
    //     } else {
    //         counter++;
    //     }
    //     console.log("counter: ", counter)
    //     setSelectedVideoSlug(recItem.videos[counter].key);
    //     ;
    // }

    const sizeChecker = (videoObj,i) => {
        if (videoObj.size > recItem.videos[Math.max(0, i-1)].size) {
            console.log("larger");
            //dispatch(addToRecData({video: recItem.videos[i].key}));
            //setVideo(recItem.videos[i].key);
            return true;
        } else {
             console.log("not larger");
            return false;
        }
        }
    

    const setVideo = (key) => {
        console.log("set clicked")
        setSelectedVideoSlug(key);
        //setSelectedVideoSlug(recItem.videos[i].key);
        // vorher auf einzelbutton: ->                    onClick={() => setVideo(i)}
        dispatch(addToRecData({video: selectedVideoSlug}));
    }
    
    return (
        <> 
            <iframe 
                width="100%" 
                height="320" 
                src={url}
                frameBorder="3" 
                allowFullScreen
            >
            </iframe> 
            {/* <Button
                onClick={() => incCounter()}
                variant="contained"
                color="primary"
                size="large"
            >
                Next
            </Button> */}
            <div className="row-center">
            {/* <ToggleButtonGroup orientaion="horizontal" value={selectedVideoSlug} onChange={setVideo()}>  */} 
                {recItem.videos && recItem.videos.map((videoObj, i) => { 
                    return( 
                    <ToggleButton 
                    key={i}
                    variant="contained"
                    color="primary"
                    size="small"
                    selected={sizeChecker(videoObj,i)}
                    value={videoObj.key}
                >   
                    <div className="column-center">
                    <div className="small">{videoObj.type} #{i+1}</div>
                    <div className="small">{videoObj.size}p</div>
                    </div>
                </ToggleButton>)
                })}
                    <ToggleButton 
                    key="no vid"
                    variant="contained"
                    color="primary"
                    size="small"
                    selected={false}
                    value="no"
                >   
                    <div className="column-center">
                    <div className="small">No Video</div>
                    
                    </div>
                </ToggleButton>
            
            {/* </ToggleButtonGroup> */}

            </div>
            {/* <LiteYouTubeEmbed
                id={selectedVideoSlug} // Default none, id of the video or playlist
                adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
                playlist={false} // Use  true when your ID be from a playlist
                poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
                title="YouTube Embed KRASS" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
                noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
            /> */}
            
            {/* {recItem.videos.map} */}
            {/* <ToggleButton
                size="small"
                value="check"
                onChange={() => {
                    incCounter();
                }}
            >
                next
            </ToggleButton> */}
        </>
    )
} 