import React, { useState } from "react";
import Maps from "../Maps/Maps";
import { local, lugares } from "./locations";

function Local() {
  const [longLat, setLongLat] = useState({
    latitud: 25.730003567445728,
    long: -100.2858830518688,
  });

  const [view, setView] = useState(3.3);

  function handleShowMap(long, lat) {
    setLongLat({
      latitud: lat,
      long: long,
    });

    setView(3);

    setTimeout(() => {
      const intervalId = setInterval(() => {
        setView(10);
      }, 2000);
    });
  }

  return (
    <div className="px-6 xs:w-[400px] sm:w-[80vw]   mx-auto  pb-10 ">
      <p className="     relative text-xs text-black    py-2 px-3 rounded-lg bg-[#FEA423] w-fit mb-4">
        Locacion
      </p>
      <div className="">
        <h1 className="text-3xl font-bold text-center">
          Esta es Nuestra Sucurrsal
        </h1>
        <div className="flex justify-center mt-3">
          <button
            onClick={() => handleShowMap(local.longitud, local.latitud)}
            className="relative h-13 w-13 overflow-hidden rounded bg-[#1a1a61f4] px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
          >
            <span className="relative">{local.nombre}</span>
          </button>
        </div>
      </div>
      <div>
        <h1 className=" mt-4 text-2xl  font-bold mb-5 text-center">
          De estos Lugares provienen nuestras Papas
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {lugares.map((item, index) => (
            <div key={item.nombre}>
              <button
                onClick={() => handleShowMap(item.longitud, item.latitud)}
                className="relative h-13 w-13 overflow-hidden rounded bg-[#1a1a61f4] px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
              >
                <span className="relative">{item.nombre}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="gap-10 flex flex-wrap mt-4 justify-center">
          <Maps array={longLat} larg="300px" heith="280px" view={view} />
        </div>
      </div>
    </div>
  );
}

export default Local;
