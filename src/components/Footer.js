import React from "react";
import { cv, profile } from "../content_option";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul>
          <li>
            <a className="link" href={cv.url} download={cv.filename}>
              Download CV
            </a>
          </li>
          <li>
            <a className="link" href="#top">
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
