import React from "react";
import { ReactComponent as Saw } from "./saw.svg";
import "./header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <Saw className="saw-logo" />
        <div className="header-title">TLM</div>
      </header>
    </div>
  );
}

export default Header;
