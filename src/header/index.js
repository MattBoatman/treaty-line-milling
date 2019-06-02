import React from "react";
import { ReactComponent as Saw } from "./saw.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <Saw className="saw-logo" />
    </header>
  );
}

export default Header;
