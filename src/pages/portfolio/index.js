import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FiArrowUpRight } from "react-icons/fi";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header page-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="page-heading mb-5">
          <Col lg="9">
            <p className="page-kicker">Selected work</p>
            <h1 className="display-4 mb-4">Projects</h1>
            <p className="page-lead">
              Practical Python, AI automation and backend projects designed around real workflows.
            </p>
          </Col>
        </Row>

        <div className="project-grid">
          {dataportfolio.map((data, i) => (
            <article key={i} className="project-card">
              <div className="project-image">
                <img src={data.img} alt={`${data.title} interface preview`} />
              </div>

              <div className="project-body">
                <div className="project-number">{String(i + 1).padStart(2, "0")}</div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>

                <div className="project-tags">
                  {data.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a href={data.link} target="_blank" rel="noreferrer" className="project-link">
                  {data.linkLabel}
                  <FiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="project-note">
          <p>
            The buttons currently open my GitHub repositories page. Each card can be connected to its exact repository and live demo as the projects are published.
          </p>
        </div>
      </Container>
    </HelmetProvider>
  );
};
