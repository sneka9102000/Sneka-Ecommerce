import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "overlay-navbar/dist/lib/ReactNavbar.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
