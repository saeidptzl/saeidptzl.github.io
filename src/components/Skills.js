import React from "react";
import { skills } from "../content_option";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="wrap split">
        <h2 id="skills-title">Skills</h2>
        <dl className="split-body skills">
          {skills.map((skill) => (
            <div key={skill.group}>
              <dt>{skill.group}</dt>
              <dd>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
