import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/saeid-profile.jpg";

export const Home = () => {
  const cvPath = `${process.env.PUBLIC_URL}/Saeid_Asgharian_CV.pdf`;

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="intro_sec d-block d-lg-flex align-items-stretch">
          <div className="visual-side order-1 order-lg-2">
            <div className="visual-grid" aria-hidden="true"></div>

            <div className="portrait-shell">
              <img
                src={profileImage}
                alt="Saeid Asgharian Shirvan"
                className="portrait-image"
              />
            </div>

            <div className="floating-card card-top">
              <span>Current focus</span>
              <strong>Python + AI Automation</strong>
            </div>

            <div className="floating-card card-bottom">
              <span>Based in</span>
              <strong>Padova, Italy</strong>
            </div>

            <div className="tech-orbit tech-one">FastAPI</div>
            <div className="tech-orbit tech-two">LLM</div>
            <div className="tech-orbit tech-three">REST</div>
          </div>

          <div className="text order-2 order-lg-1 d-lg-flex justify-content-center">
            <div className="align-self-center intro-wrap">
              <div className="intro mx-auto">
                <p className="availability">
                  <span></span>
                  {introdata.availability}
                </p>

                <p className="intro-label">Junior developer portfolio</p>
                <h2 className="mb-1x">{introdata.title}</h2>

                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                      delay: 45,
                    }}
                  />
                </h1>

                <p className="intro-description">{introdata.description}</p>

                <div className="intro_btn-action">
                  <Link to="/portfolio" className="text_2">
                    <span id="button_p" className="ac_btn btn">
                      View Projects
                    </span>
                  </Link>

                  <a href={cvPath} target="_blank" rel="noreferrer">
                    <span id="button_h" className="ac_btn btn">
                      Download CV
                    </span>
                  </a>
                </div>

                <div className="home-meta">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>REST APIs</span>
                  <span>LLM Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
