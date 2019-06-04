import React from "react";
import Button from "../../components/button";
import "./homeView.css";

function HomeView() {
  return (
    <div className="home-view">
      <div className="main">
        <div className="title">Treaty Line Milling</div>
        <div className="divider" />
        <div className="description">
          Description about what treaty line milling is and what are portable
          milling services
        </div>
        <div className="location">
          Treaty Line Milling is located at blah blah
        </div>
        <div className="button-wrapper">
          <Button label="Let's Connect" buttonColor="#C6310B" textColor="#FFEBD8" border="none"/>
          <Button label="Learn More"/>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
