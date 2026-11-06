import React from "react";

const iconProps = {
  className: "icon",
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
  focusable: false,
};

export const ArrowUpRight = () => (
  <svg {...iconProps}>
    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
  </svg>
);

export const Download = () => (
  <svg {...iconProps}>
    <path d="M8 2v8.5M4.5 7.5L8 11l3.5-3.5M2.5 14h11" />
  </svg>
);

export const ExternalLink = ({ href, children, className }) => (
  <a className={className} href={href} target="_blank" rel="noopener noreferrer">
    {children}
    <ArrowUpRight />
    <span className="visually-hidden"> (opens in a new tab)</span>
  </a>
);
