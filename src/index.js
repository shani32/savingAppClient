import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BackgroundProvider } from "./Context/background.context";

ReactDOM.render(
  <React.StrictMode>
    <BackgroundProvider>
      <App />
    </BackgroundProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
