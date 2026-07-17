import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  education,
  skillGroups,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header page-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="page-heading mb-5">
          <Col lg="9">
            <p className="page-kicker">Profile</p>
            <h1 className="display-4 mb-4">About me</h1>
            <p className="page-lead">
              Backend foundations, practical automation and an engineering approach to problem solving.
            </p>
          </Col>
        </Row>

        <Row className="sec_sp about-intro">
          <Col lg="5">
            <h2 className="section-heading">{dataabout.title}</h2>
          </Col>
          <Col lg="7">
            <p className="about-copy">{dataabout.aboutme}</p>
            <div className="stat-grid">
              <div><strong>600h</strong><span>Software internship</span></div>
              <div><strong>3</strong><span>Core portfolio projects</span></div>
              <div><strong>C1</strong><span>English</span></div>
            </div>
          </Col>
        </Row>

        <section className="sec_sp">
          <p className="section-eyebrow">Professional experience</p>
          <div className="timeline-list">
            {worktimeline.map((data, i) => (
              <article className="timeline-card" key={i}>
                <div className="timeline-meta">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <time>{data.date}</time>
                </div>
                <div>
                  <p className="timeline-place">{data.where}</p>
                  <h3>{data.jobtitle}</h3>
                  <ul>
                    {data.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="sec_sp">
          <p className="section-eyebrow">Technical stack</p>
          <Row className="g-4">
            {skillGroups.map((group, i) => (
              <Col md="6" key={i}>
                <article className="skill-group">
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </section>

        <section className="sec_sp">
          <p className="section-eyebrow">What I build</p>
          <Row className="g-4">
            {services.map((service, i) => (
              <Col lg="4" key={i}>
                <article className="service-card">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Col>
            ))}
          </Row>
        </section>

        <section className="sec_sp">
          <p className="section-eyebrow">Education</p>
          <div className="education-list">
            {education.map((item, i) => (
              <article className="education-card" key={i}>
                <time>{item.date}</time>
                <div>
                  <h3>{item.degree}</h3>
                  <p className="education-place">{item.institution}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </HelmetProvider>
  );
};
