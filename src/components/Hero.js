import React from "react";
import { cv, profile } from "../content_option";
import { Download } from "./Icons";

export default function Hero() {
  const { portrait } = profile;

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <h1 id="hero-title">
            {profile.nameLines.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </h1>

          <div className="hero-body">
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href={cv.url} download={cv.filename}>
                <Download />
                Download CV{" "}
                <span className="btn-note">{cv.format}</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <img
              src={portrait.src}
              width={portrait.width}
              height={portrait.height}
              alt={portrait.alt}
            />
          </div>
        </div>

        <ul className="hero-facts">
          {profile.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
