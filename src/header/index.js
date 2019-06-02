import React from "react";
import { ReactComponent as Saw } from "./saw.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <Saw className="saw-logo" />
      <div className="header-title">TLM</div>
    </header>
  );
}

export default Header;
