import React, { useState, useEffect } from "react";

const Misioneros = ({ id }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % numImages);
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  const imagePaths = ["./missionary/0.png", "./missionary/1.png"];
  const numImages = imagePaths.length;

  return (
    <>
      {id == 0 ? (
        <></>
      ) : (
        <img src={imagePaths[imageIndex]} alt="" className="player" />
      )}
    </>
  );
};

export default Misioneros;
