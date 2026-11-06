import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { cv } from "./content_option";
import "./styles.css";

// The old site had separate pages, and GitHub Pages serves index.html (as
// 404.html) for any unknown path. Keep old links working by sending them to the
// matching section, or to the top of the page.
const oldPages = {
  "/about": "#about",
  "/portfolio": "#projects",
  "/contact": "#contact",
};

const path = window.location.pathname.replace(/\/+$/, "") || "/";

if (path === "/Saeid_Asgharian_CV.pdf") {
  window.location.replace(cv.url);
} else {
  if (path !== "/") {
    const target = oldPages[path] || window.location.hash;
    window.history.replaceState(null, "", `${process.env.PUBLIC_URL}/${target}`);
  }

  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
