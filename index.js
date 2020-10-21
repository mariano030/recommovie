const express = require("express");
const app = express();
const compression = require("compression");
const { default: Axios } = require("axios");
const bodyParser = require("body-parser");
const db = require("./db.js");

const secrets = require("./secrets");
const util = require("util");

// cookies
const cookieSession = require("cookie-session");
const csurf = require("csurf");

const cookieSessionMiddleware = cookieSession({
    secret: secrets.SESSION_SECRET,
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);
app.use(csurf());

app.use((req, res, next) => {
    res.set("x-frame-options", "DENY");
    res.cookie("mytoken", req.csrfToken());
    next();
});

console.log("api key", secrets.TMDB_API_KEY);
app.use(compression());

let uidSafe = util.promisify(require("uid-safe"));

// proxy setup
if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

// middleware
app.use(bodyParser.urlencoded({ extended: true })); // with extended:true you can hand over an object to the POST route (or any)!!!
app.use(express.json());

// console.log middleware   --- why socket.io?
app.use(function (req, res, next) {
    console.log("### method: ", req.method, " ### destination", req.url);
    next();
});

// static route for public
app.use(express.static("public"));

// post routes
app.post("/rec/", async (req, res) => {
    if (req.body && req.session) {
        console.log("req.body.session");
    } else {
        console.log("no cookie present");
    }
    console.log("/rec/ - making a recOmmendation!");
    console.log("req.body", req.body);

    // get cookie!
    // user id in users eintragen
    //console.log("fullUrl", fullUrl);
    console.log(req.header);
    console.log("req.protocol: ", req.protocol);
    console.log('req.get("host"): ', req.get("host"));
    console.log("req.url: ", req.url);
    // sender req.body.session
    const {
        mediaType,
        itemId,
        imageType = 2,
        aspects,
        extUrl,
        message,
    } = req.body;
    const senderId = 1;

    console.log("aspects", aspects);
    console.log("mediaType", mediaType);
    console.log("itemId: ", itemId);
    console.log("imageType: ", imageType);
    console.log("message: ", message);
    // deal with focus!! list of focus relations?!
    //console.log("req.originalUrl", originalUrl);
    // const randomCode = util.promisify(generateCode);

    try {
        const randomCode = await uidSafe(5);

        console.log("promised", randomCode);

        const { rows } = await db.makeRec(
            randomCode,
            mediaType,
            itemId,
            senderId,
            message
        );
        console.log("data.id: ", rows[0].id);
        for (const aspectId of aspects) {
            await db.setAspects(rows[0].id, aspectId);
        }

        const link =
            req.protocol + "://" + req.get("host") + "/r/" + randomCode;
        //console.log("mylink", dynamicLink);
        console.log("sending: link", link);
        res.json({ link });
        console.log("response sent to server!");
    } catch (err) {
        console.error("error", err);
    }

    // uidSafe(5)
    //     .then((randomCode) => {
    //         console.log("promised", randomCode);

    //         const data = db
    //             .makeRec(randomCode, mediaType, itemId, senderId, message)
    //             .then((data) => {
    //                 console.log("data.id", data.id);
    //                 aspects.map(())
    //                 db.setAspects(data.id)
    //                 const link =
    //                     req.protocol +
    //                     "://" +
    //                     req.get("host") +
    //                     "/r/" +
    //                     randomCode;
    //                 //console.log("mylink", dynamicLink);
    //                 console.log("sending: link", link);
    //                 res.json({ link });
    //                 console.log("response sent to server!");
    //             })
    //             .catch((err) => console.log("error inserting rec ", err));
    //     })
    //     .catch((err) =>
    //         console.log("error with randomCode and DB recs inster", err)
    //     );

    // add req.body.session for sender
    //await db.makeRec(code, "movie");
    //const { mediaType, mediaId, imageType } = req.body;
});

// get routes
app.get("/api/multi-search/:searchTerm", async (req, res) => {
    console.log("searching for: req.body", req.params);

    // template movie search url https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    // multi-search: https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&query=curb%20your%20enthusiam&page=1&include_adult=false

    // translate movieTitle to %20
    const searchTerm = req.params.searchTerm;
    const searchParameter = encodeURIComponent(searchTerm.trim());
    const searchUrl =
        "https://api.themoviedb.org/3/search/multi?api_key=" +
        secrets.TMDB_API_KEY +
        "&language=en-US&query=" +
        searchParameter +
        // "curb%20your" +
        "&page=1&include_adult=false";
    try {
        const { data } = await Axios.get(searchUrl);
        //console.log(data);
        console.log(
            "#######################################################################"
        );
        console.log("data.results: ", data.results);
        console.log(
            "###########################  results done  #############################"
        );
        res.json(data.results);
    } catch (err) {
        console.log("error searching for movie ", err);
        //res.json({ error: true });
    }
});

// app.get("/api/credits-by-id/:id", async (req, res) => {
//     console.log("/api/credits-by-id/:id");
//     console.log("searching for: req.body", req.params);
//     const id = req.params.id;
//     console.log("<>>> PARAMS.ID", req.params.id);
//     console.log("<>>> ID", id);
//     //
//     // https://api.themoviedb.org/3/movie/21575/credits?api_key=API_KEYYYY&language=en-US
//     //
//     const searchUrl =
//         "https://api.themoviedb.org/3/movie/" +
//         id +
//         "/credits?api_key=" +
//         secrets.TMDB_API_KEY +
//         "&language=en-US";
//     try {
//         const { data } = await Axios.get(searchUrl);
//         console.log(
//             "*CREDITS*CREDITS*CREDITS*CREDITS*CREDITS*CREDITS*CREDITS*CREDITS*"
//         );
//         console.log("searchUrl: ", searchUrl);
//         console.log("data: .DATA", data);
//         console.log(
//             "CREDITS*CREDITS*CREDITS*##########  results done  #######CREDITS*CREDITS*CREDITS*##############"
//         );
//         res.json(data);
//     } catch (err) {
//         console.log("error searching for item by ID ", err);
//         res.json({ error: true });
//     }
// });

app.get("/api/get-aspects/", async (req, res) => {
    try {
        const aspectsResults = await db.getAspects();
        console.log("getAspects done:  aspectsResults: ", aspectsResults);
        res.json(aspectsResults.rows);
        console.log("aspectsResults.rows", aspectsResults.rows);
    } catch (err) {
        console.log("error getting aspects");
        //res.json((error: true})
    }
});

app.get("/api/get-genres/", async (req, res) => {
    const searchUrl =
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        secrets.TMDB_API_KEY +
        "&language=en-US&query=";
    try {
        const { data } = await Axios.get(searchUrl);
        console.log("GENRES RECEIVED");
        console.log("genres aka data", data);
        res.json(data);
    } catch (err) {
        console.log("error getting GENRES from tmdb");
        //res.json((error: true})
    }
});

app.get("/r/:code", async (req, res) => {
    // check if user is senderId
    console.log("RECCCOMOVIE req.params.code", req.params.code);
});

// star route
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
