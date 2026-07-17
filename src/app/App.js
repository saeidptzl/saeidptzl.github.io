import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={10}
          outerSize={16}
          color="47, 124, 255"
          outerAlpha={0.28}
          innerScale={0.8}
          outerScale={4}
        />
      </div>

      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
