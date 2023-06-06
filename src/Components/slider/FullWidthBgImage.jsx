import React from "react";
import { sliderData } from "../../Constant/Constant";

export const FullWidthBgImage = ({
  image,
  label,
  text,
  height,
  borderRadius
}) => {
  return (
    <div>
      <div className="body pb-3 ps-2 mb-2" style={{ color: "#343434" }}>{text}</div>
      <div
        className="bg-image-container"
        style={{ backgroundImage: `url(${image})`, borderRadius, height }}
      >
        <div className="gradient">
          <div className="text-container">
            <div className="label">{label}</div>

          </div>
        </div>
      </div>
    </div>
  );
};
