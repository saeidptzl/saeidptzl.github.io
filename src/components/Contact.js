import React from "react";
import { contact, cv } from "../content_option";
import { ArrowUpRight, Download, ExternalLink } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">Get in touch</h2>
        <p className="contact-intro">{contact.intro}</p>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>

        <dl className="contact-links">
          {contact.links.map((link) => (
            <div key={link.href}>
              <dt>{link.label}</dt>
              <dd>
                <ExternalLink className="link" href={link.href}>
                  {link.text}
                </ExternalLink>
              </dd>
            </div>
          ))}
          <div>
            <dt>CV</dt>
            <dd className="contact-cv">
              <a className="link" href={cv.url} download={cv.filename}>
                Download CV
                <Download />
              </a>
              <a className="link" href={cv.url} target="_blank" rel="noopener noreferrer">
                Open in browser
                <ArrowUpRight />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              <span className="contact-cv-format">{cv.format}</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
