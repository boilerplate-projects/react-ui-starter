import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./app/helpers/registerServiceWorker";

import "./styles/main.scss";
import App from "./app/App.js";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
