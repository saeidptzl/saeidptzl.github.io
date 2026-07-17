import React, { useEffect, useState } from "react";
import "./style.css";
import { VscMenu, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cvPath = `${process.env.PUBLIC_URL}/Saeid_Asgharian_CV.pdf`;

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("ovhidden", isOpen);
    return () => document.body.classList.remove("ovhidden");
  }, [isOpen]);

  return (
    <>
      <header className="fixed-top site__header">
        <div className="header-inner d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac logo-link" to="/" onClick={closeMenu}>
            <span>SA</span>
            {logotext}
          </Link>

          <div className="d-flex align-items-center header-actions">
            <a className="header-cv" href={cvPath} target="_blank" rel="noreferrer">
              CV
            </a>
            <Themetoggle />
            <button
              className="menu__button nav_ac"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              {isOpen ? <VscClose /> : <VscMenu />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${isOpen ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <p className="menu-label">Navigation</p>
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={closeMenu} to="/">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={closeMenu} to="/portfolio">Projects</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={closeMenu} to="/about">About</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={closeMenu} to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex flex-wrap">
              <a href={socialprofils.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={socialprofils.email}>Email</a>
            </div>
            <p className="copyright m-0">© {new Date().getFullYear()} {logotext}</p>
          </div>
        </div>
      </header>

      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
