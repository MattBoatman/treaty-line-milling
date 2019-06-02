import React from "react";
import PropTypes from "prop-types";
import "./button.css";

function Button({ border, buttonColor, label, onClick, textColor }) {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
      style={{
        backgroundColor: buttonColor,
        color: textColor,
        border: border
      }}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  borderColor: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  border: "",
  buttonColor: "",
  textColor: "",
  onClick: () => {},
};

export default Button;
