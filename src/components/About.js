import React from "react";
import { about } from "../content_option";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="wrap split">
        <h2 id="about-title">About</h2>
        <div className="split-body about-body">
          <p className="about-lead">{about.lead}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
