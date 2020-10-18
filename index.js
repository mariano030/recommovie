const express = require("express");
const app = express();
const compression = require("compression");
const { default: Axios } = require("axios");
const bodyParser = require("body-parser");

const secrets = require("./secrets");

console.log("api key", secrets.TMDB_API_KEY);
app.use(compression());

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
// app.use(function (req, res, next) {
//     console.log("### method: ", req.method, " ### destination", req.url);
//     next();
// });

// static route for public
app.use(express.static("public"));

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
        res.json({ error: "error accessing database" });
    }
});

app.get("/api/credits-by-id/:id", async (req, res) => {
    console.log("/api/credits-by-id/:id");
    console.log("searching for: req.body", req.params);
    const id = req.params.id;
    console.log("<>>> PARAMS.ID", req.params.id);
    console.log("<>>> ID", id);
    //
    // https://api.themoviedb.org/3/movie/21575/credits?api_key=API_KEYYYY&language=en-US
    //
    const searchUrl =
        "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=" +
        secrets.TMDB_API_KEY +
        "&language=en-US";
    try {
        const { data } = await Axios.get(searchUrl);
        console.log(
            "*CREDITS*CREDITS*CREDITS*CREDITS*CREDITS*CREDITS*CREDITS*CREDITS*"
        );
        console.log("searchUrl: ", searchUrl);
        console.log("data: .DATA", data);
        console.log(
            "CREDITS*CREDITS*CREDITS*##########  results done  #######CREDITS*CREDITS*CREDITS*##############"
        );
        res.json(data);
    } catch (err) {
        console.log("error searching for item by ID ", err);
        res.json({ error: "error accessing database" });
    }
});

app.get("/r/:code", async (req, res) => {
    console.log("RECCCOMOVIE req.params.code", req.params.code);
});

// star route
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
    console.log("I'm listening.");
});
