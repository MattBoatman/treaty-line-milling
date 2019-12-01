import React from "react";
import Button from "../../components/button";
import ImageRotator from "../../components/imageRotator";
import tl1 from "../../images/treaty-line-0.JPG";
import tl2 from "../../images/treaty-line-1.JPG";
import tl3 from "../../images/treaty-line-2.JPG";
import "./homeView.css";

function HomeView() {
  const _openEmail = () => {
    window.open(
      "mailto:ty.treatyline@gmail.com?subject=Treat Line Milling Inquiry"
    );
  };

  const _openPhone = () => {
    window.open("tel:5672046408");
  };
  return (
    <div className="home-view">
      <div className="main">
        <div className="content">
          <div>
            <div className="title">Treaty Line Milling</div>
            <div className="divider" />
          </div>
          <div>
            <div className="description">
              Treaty Line Milling is a portable milling service serving the Lima
              area since 2019.
            </div>
            <div className="location">
              Treaty Line Milling is located in Lima, Ohio, but can travel to
              surrounding areas.
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              label="Call Me"
              buttonColor="#C6310B"
              textColor="#FFEBD8"
              border="none"
              onClick={_openPhone}
            />
            <Button label="Email Me" onClick={_openEmail} />
          </div>
        </div>
        <div className="image-wrapper">
          <ImageRotator images={[tl1, tl2, tl3]} />
        </div>
      </div>
    </div>
  );
}

export default HomeView;
