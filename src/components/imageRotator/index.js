import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./imageRotator.css";

function ImageRotator({ images }) {
  const [currentImage, updateImage] = useState(images[0]);
  const [counter, updateCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      updateCounter(prevCounter => {
        if (prevCounter === images.length - 1) {
          updateImage(images[0]);
          return 0;
        }
        updateImage(images[prevCounter + 1]);
        return prevCounter + 1;
      });
    }, 3050);
    return () => clearTimeout(timer);
  }, [images, images.length]);
  return <img src={currentImage} className="-image" />;
}

ImageRotator.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageRotator;
