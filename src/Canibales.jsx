import React, { useState, useEffect } from "react";

const Canibales = ({ id }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // Cambiar la dirección de la imagen cada segundo
    const intervalId = setInterval(() => {
      // Incrementar el índice de la imagen (o reiniciar si llega al final)
      setImageIndex((prevIndex) => (prevIndex + 1) % numImages);
    }, 150);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  // Rutas de las imágenes (ajusta según tus necesidades)
  const imagePaths = ["./cannibal/0.png", "./cannibal/1.png"];
  const numImages = imagePaths.length;

  return <img src={imagePaths[imageIndex]} alt="" className="player" />;
};

export default Canibales;
