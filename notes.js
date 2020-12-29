
///////////////////////////////////////////////////////////

// clean up of existing code?
// move the credits getting to ItemInfo

// post route for recommendation
// create first recommendation

// rec content:
// INPUTS:
//  senderID
//  recipient NAME
//  sender NAME
//  (imageType)

//  focus
//  message
//  extUrl





buttons
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Upload
            </Button>
            <Button
                variant="contained"
                disabled
                color="secondary"

                className={classes.button}
                startIcon={<KeyboardVoiceIcon />}
            >
                Talk
            </Button>
            {/* Fastfood Favorite Highlight Spotlight Loyalty MeetingRoom Mood Movie
            MovieFilter MoodBad TagFaces Theaters Textsms Watch WatchLater Cake
            Weekend EmojiEmotions Face */}
            ChatBubbleOutlined SentimentDissatisfied SentimentSatisfied
            SentimentSatisfiedAlt SentimentVerySatisfied
            SentimentVeryDissatisfied NavigateBefore NavigateNextf
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>


functionName (e) =>{
    //prevent defaults? wenn button im form??
    setWasauchimmer(e.target.value)
    dispatch(wasauchImmer(e.target.value));
}

<TextField 
    onChange={functionName}
    value={stateVariable}
/>

// picture selector

// general - do i get the imdb id??

// get credits for item
//      implement crew / cast
// get videos for item
//      implement trailers


// code/fsadf/
// check cookie with sender
// if no cookie set cookie
// if recipient null update
// get rec
// get item


// Preview??


// kein bild vorhanden?! - die katze 2007


// recommender id in cookie speichern
// beim rec link checke ob recommender id von rec != vom cookie dann bin ich angucker


// post
// send recData
// (session)
// find next user and create?
// create focus insert
// create rec insert
// generate link
// res.json link



// http://localhost:8080/r/D9DdD3s un prophete  
// http://localhost:8080/r/C52OtVQ  nathan for you


// http://localhost:8080/r/pIVdCRA recipient sender

// input color
// tv series - datum - createor - ...
// seasons ? 

// DONE!! empty sender    empty recipient 

// 

//copy link to clipboard


// link to just watch?

// enter in searchfield takes you to items[0]

// rotten tomatoes api - scores - reviews

// autoselect textfield (useEffect?)

// OLI page seo : https://github.com/OliverSieweke/oliversieweke/blob/kreuzberg/src/components/seo/page-seo.js

// const cohort = "masala";

// preview trailer and include or not include trailer


// rating reommendations?
// rating user's recommendation accuracy?

//create lists - let user update lists

// fade effect for pics: https://mui.wertarbyte.com/#!/Image/1


//VIEW DETAILS

// * all
// country of origin! in recItem

// * person

// * tv show



// APPEND ALL ADDITIONAL DATA TO recItem??
// recItem
// recItem.credits
// recItem.details



// "Reality" genre not showing. test case: love island


// implement keyboard control for search navigation

// in action api calls stacken
// 2te action die credits details lädt
// videos etc
// einzelne komponenten für verschidene media typen
// mehr einzelne komponenten

// refactor (for list feature)
// aspects working with global "stauts" variable for selection -> move to recItem



// npm WARN webpack-dev-middleware@1.12.2 requires a peer of webpack@^1.0.0 || ^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
// npm WARN spiced-social-network@1.0.0 No description
// npm WARN spiced-social-network@1.0.0 No repository field.
// npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules/chokidar/node_modules/fsevents):
// npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
// npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/fsevents):
// npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})