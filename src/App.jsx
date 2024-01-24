import React, { useState, useEffect } from "react";
import "./App.css";
import Boat from "./Boat";
import Canibales from "./canibales";
import Misioneros from "./misioneros";

function App() {
  const [isInitial, setIsInitial] = useState(true);
  const [idMisionero, setIdMisionero] = useState(0);
  const [position, setPosition] = useState("izquierda");
  const handleClick = () => {
    setIsInitial((prevIsInitial) => !prevIsInitial);
  };

  useEffect(() => {
    console.log("mi id actual es " + idMisionero);
    console.log("voy a parecer al fondo " + position);
    // Puedes realizar acciones basadas en el nuevo estado aquí
  }, [idMisionero, position]);



  // solo sirve para el player 4
  //sirve cuando quieres que el player esté en el centro
  const pasarId = () => {
    console.log("id es " + idMisionero);
    setIdMisionero(4);
    setPosition("centro");
  };
  //sirve cuando quieres que el player esté en los lados
  const pasarId2 = () => {
    setIdMisionero(0);
    if (isInitial) {
      setPosition("izquierda");
    } else {
      setPosition("derecha");
    }
  };

  const boatImages = ["./boat/0.png", "./boat/2.png"];
  const imageIndex = isInitial ? 0 : 1;
  return (
    <>
      <div className="fondo">
        <div className="izquierda">
          <div className="izquierda__canibales">
            <div className="cajita"></div>
            <div className="cajita"></div>
            <div className="cajita"></div>
            {/* <Canibales id={1}></Canibales>
            <Canibales id={2}></Canibales>
            <Canibales id={3}></Canibales> */}
          </div>
          <div className="izquierda__misioneros">
            <div onClick={pasarId} className="cajita">
              {idMisionero == 0 && position == "izquierda" ? (
                <Misioneros id={4}></Misioneros>
              ) : (
                <></>
              )}
            </div>
            <div className="cajita">dasd</div>
            <div className="cajita">dsada</div>

            {/* <Misioneros id={5}></Misioneros>
            <Misioneros id={6}></Misioneros> */}
          </div>
        </div>
        <div className="centro">
          <div
            className="centro__main"
            style={{ position: "absolute", left: isInitial ? "0%" : "70%" }}
          >
            <div className="centro__main__seat">
              <div className="centro__main__seat__izq">
                <Canibales id={1}></Canibales>
              </div>
              <div className="centro__main__seat__der" onClick={pasarId2}>
                {idMisionero == 4 && position == "centro" ? (
                  <Misioneros id={idMisionero}></Misioneros>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <Boat
              boatImages={boatImages}
              imageIndex={imageIndex}
              onClick={handleClick}
            ></Boat>
          </div>
        </div>
        <div className="derecha">
          <div onClick={pasarId} style={{ background: "red" }}>
            {idMisionero == 0 && position == "derecha" ? (
              <Misioneros id={4}></Misioneros>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
