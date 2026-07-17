import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform];
          const external = !url.startsWith("mailto:");

          return (
            <li key={platform}>
              <a
                href={url}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                aria-label={platform}
                title={platform}
              >
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Connect</p>
    </div>
  );
};
