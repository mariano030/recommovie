
///////////////////////////////////////////////////////////

// monday
// clean up of existing code?
// move the credits getting to ItemInfo

// post route for recommendation
// create first recommendation

// rec content:
// INPUTSS:
//  senderID
//  recipient NAME
//  sender NAME
//  (imageType)

//  focus
//  message
//  extUrl

// tuesday
// picture selector

// wednesday

// prsentation

// general - do i get the imdb id??



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

// get credits
// get videos for item

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