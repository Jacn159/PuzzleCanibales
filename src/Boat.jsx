import React, { useState } from "react";

const Boat = ({ boatImages, imageIndex, onClick }) => {
  return (
    <img
      className="train"
      src={boatImages[imageIndex]}
      alt={`Boat Image ${imageIndex}`}
      onClick={onClick}
    />
  );
};

export default Boat;
