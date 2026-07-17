import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig, socialprofils } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${contactConfig.YOUR_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container className="page-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="page-heading mb-5">
          <Col lg="9">
            <p className="page-kicker">Contact</p>
            <h1 className="display-4 mb-4">Let’s build something useful.</h1>
            <p className="page-lead">{contactConfig.description}</p>
          </Col>
        </Row>

        <Row className="contact-layout g-5">
          <Col lg="5">
            <div className="contact-info">
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="contact-item">
                <FiMail />
                <div>
                  <span>Email</span>
                  <strong>{contactConfig.YOUR_EMAIL}</strong>
                </div>
              </a>

              <a href={`tel:${contactConfig.YOUR_FONE.replace(/\s/g, "")}`} className="contact-item">
                <FiPhone />
                <div>
                  <span>Phone</span>
                  <strong>{contactConfig.YOUR_FONE}</strong>
                </div>
              </a>

              <div className="contact-item">
                <FiMapPin />
                <div>
                  <span>Location</span>
                  <strong>{contactConfig.LOCATION}</strong>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={socialprofils.github} target="_blank" rel="noreferrer">
                <FiGithub /> GitHub <FiArrowUpRight />
              </a>
              <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin /> LinkedIn <FiArrowUpRight />
              </a>
            </div>
          </Col>

          <Col lg="7">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <label>
                  <span>Name</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  <span>Email</span>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  placeholder="Tell me about the role, project or collaboration."
                  required
                />
              </label>

              <button className="send-button" type="submit">
                Prepare email
                <FiArrowUpRight />
              </button>

              <p className="form-note">
                This button opens your default email application with the message already prepared.
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
