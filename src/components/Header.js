import React, { useEffect, useRef, useState } from "react";
import { contact, cv, navigation, profile } from "../content_option";
import { ArrowUpRight, Download, ExternalLink } from "./Icons";

const DESKTOP_QUERY = "(min-width: 960px)";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [packetX, setPacketX] = useState(0);
  const chainRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Track which section is in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...navigation.map((item) => item.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Move the marker along the nav line to the active section.
  useEffect(() => {
    const place = () => {
      const link = chainRef.current?.querySelector(`a[href="#${active}"]`);
      if (link) setPacketX(link.closest("li").offsetLeft);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  // While the mobile menu is open: stop the page behind it from scrolling or
  // taking focus, and close on Escape or when the layout becomes desktop.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    document.querySelectorAll("main, footer").forEach((element) => {
      element.inert = open;
    });
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onLayoutChange = (event) => {
      if (event.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onLayoutChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onLayoutChange);
    };
  }, [open]);

  const isInSection = active && active !== "top";
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <a className="brand" href="#top" onClick={closeMenu}>
          {profile.name}
        </a>

        <nav className="desktop-nav" aria-label="Main">
          <ol className="chain" ref={chainRef}>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
            <li
              className={`chain-packet${isInSection ? " is-visible" : ""}`}
              style={{ transform: `translateX(${packetX}px)` }}
              aria-hidden="true"
            />
          </ol>
          <a
            className="nav-cv"
            href={cv.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`CV (${cv.format}, opens in a new tab)`}
          >
            CV
            <ArrowUpRight />
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ol className="mobile-chain">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu-foot">
          <a className="btn btn-primary" href={cv.url} download={cv.filename} onClick={closeMenu}>
            <Download />
            Download CV{" "}
            <span className="btn-note">{cv.format}</span>
          </a>
          <ul className="mobile-menu-links">
            <li>
              <a className="link" href={`mailto:${contact.email}`}>
                Email
              </a>
            </li>
            {contact.links.map((link) => (
              <li key={link.href}>
                <ExternalLink className="link" href={link.href}>
                  {link.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
