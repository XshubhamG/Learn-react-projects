import React, { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hex = rgbToHex(...rgb);
  const bgclr = rgb.join(",");
  const hexValue = `#${hexColor}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hexValue);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <div
      className={`color ${index > 8 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgclr})` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue ? hexValue : hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </div>
  );
};

export default SingleColor;
