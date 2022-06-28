import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  rootElement
);
