import React from "react";
import Header from "../header";
import HomeView from "./homeView";

import "./layout.css";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <HomeView />
    </div>
  );
}

export default Layout;
