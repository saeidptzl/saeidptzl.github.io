import React from "react";
import { lora, plugin, projectsIntro, websites, wordloop } from "../content_option";
import { ExternalLink } from "./Icons";
import LoraChain from "./LoraChain";

function ProjectHead({ project }) {
  const { status } = project;
  return (
    <header className="project-head">
      <h3 id={`${project.id}-title`}>{project.title}</h3>
      <p className="project-kind">{project.kind}</p>
      <p className={`status${status.isPublic ? "" : " status-private"}`}>{status.label}</p>
    </header>
  );
}

function Spec({ project, columns }) {
  return (
    <dl className={`spec${columns ? " spec-columns" : ""}`}>
      <div>
        <dt>The problem</dt>
        <dd>{project.problem}</dd>
      </div>
      <div>
        <dt>My contribution</dt>
        <dd>{project.contribution}</dd>
      </div>
      <div>
        <dt>Technologies</dt>
        <dd>{project.technologies.join(", ")}</dd>
      </div>
      <div>
        <dt>Outcome</dt>
        <dd>{project.outcome}</dd>
      </div>
    </dl>
  );
}

function ProjectFoot({ project }) {
  if (!project.links && !project.privacyNote) return null;
  return (
    <div className="project-foot">
      {project.links?.map((link) => (
        <ExternalLink key={link.href} className="link link-strong" href={link.href}>
          {link.label}
        </ExternalLink>
      ))}
      {project.privacyNote && <p className="project-note">{project.privacyNote}</p>}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section-projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="projects-intro">
          <h2 id="projects-title">Selected projects</h2>
          <p>{projectsIntro}</p>
        </div>

        <article className="project" aria-labelledby={`${lora.id}-title`}>
          <ProjectHead project={lora} />
          <LoraChain project={lora} />
          <Spec project={lora} columns />
          <ProjectFoot project={lora} />
        </article>

        <article className="project project-split" aria-labelledby={`${plugin.id}-title`}>
          <div>
            <ProjectHead project={plugin} />
            <figure className="flow">
              <ol>
                {plugin.flow.map((step) => (
                  <li key={step.name}>
                    <strong>{step.name}</strong>
                    <span>{step.detail}</span>
                  </li>
                ))}
              </ol>
              <figcaption>{plugin.flowCaption}</figcaption>
            </figure>
          </div>
          <div>
            <Spec project={plugin} />
            <ProjectFoot project={plugin} />
          </div>
        </article>

        <article className="project" aria-labelledby={`${wordloop.id}-title`}>
          <ProjectHead project={wordloop} />
          <div className="project-media-split">
            <figure className="wordloop-shots">
              <div className="wordloop-images">
                {wordloop.images.map((image) => (
                  <img
                    key={image.alt}
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <figcaption>{wordloop.caption}</figcaption>
            </figure>
            <div>
              <Spec project={wordloop} />
              <ProjectFoot project={wordloop} />
            </div>
          </div>
        </article>

        <div className="project-pair">
          {websites.map((site) => (
            <article key={site.id} className="project" aria-labelledby={`${site.id}-title`}>
              <figure className="site-shot">
                <img
                  src={site.image.src}
                  width={site.image.width}
                  height={site.image.height}
                  alt={site.image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{site.caption}</figcaption>
              </figure>
              <ProjectHead project={site} />
              <Spec project={site} />
              <ProjectFoot project={site} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
