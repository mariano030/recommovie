import React from "react";
import ReactDOM from "react-dom";

// import App from "./app.js";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./redux/reducer.js";
import { Provider } from "react-redux";

// components
import SearchItem from "./containers/SearchItem.js";
import AddDetails from "./containers/AddDetails.js";
// import { init } from "./socket.js";

// socket.io
// import * as io from "socket.io-client";
// const socket = io.connect(); // starts a socket connection with server

// socket.on("welcome", (data) => console.log(data));

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

let elem = (
    <Provider store={store}>
        {" "}
        <div className="row-left">
            <SearchItem />
            <AddDetails />
            {/* SelectFocalPoint */}
            {/* Recommend TO & MSG */}
            {/* Link Generation */}
        </div>
    </Provider>
);

if (location.pathname == "/welcome") {
    elem = <Welcome />; // does not have access to redux
} else {
    console.log("not/welcome/");
}

ReactDOM.render(elem, document.querySelector("main"));
