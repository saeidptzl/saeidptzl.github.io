import React from "react";
import { education, experience } from "../content_option";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="wrap split">
        <h2 id="experience-title">Experience and education</h2>
        <div className="split-body">
          <h3 className="timeline-title">Experience</h3>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.title}>
                <span className="timeline-dates">{job.dates}</span>
                <div>
                  <h4>{job.title}</h4>
                  <p className="timeline-place">{job.place}</p>
                  <ul className="timeline-details">
                    {job.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="timeline-title">Education</h3>
          <ol className="timeline">
            {education.map((degree) => (
              <li key={degree.title}>
                <span className="timeline-dates">{degree.dates}</span>
                <div>
                  <h4>{degree.title}</h4>
                  <p className="timeline-place">{degree.place}</p>
                  <p className="timeline-detail">{degree.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
