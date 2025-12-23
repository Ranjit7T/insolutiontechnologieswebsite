import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";
import logo from "./assets/logocompany.jpg";

/* FAVICON */
const setFavicon = (icon) => {
  const sizes = ["16x16", "32x32", "48x48"];
  sizes.forEach((size) => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = size;
    link.href = icon;
    document.head.appendChild(link);
  });
};

setFavicon(logo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
