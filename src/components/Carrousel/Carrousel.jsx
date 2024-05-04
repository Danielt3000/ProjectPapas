import { Carousel } from "flowbite-react";
import papas1 from "../Carrousel/assets/papasEncarga.jpg";
import papas2 from "../Carrousel/assets/papasLimpiandoze.jpg";
import papas3 from "./assets/papasRecogiendo.jpg";

function Carrousel() {
  return (
    <div className="h-56  md:w-[70%] mx-auto  sm:h-64 xl:h-80 2xl:h-96 mt-16">
      <Carousel slide={false}>
        <img src={papas1} alt="..." />
        <img src={papas2} alt="..." />
        <img src={papas3} alt="..." />
      </Carousel>
    </div>
  );
}

export default Carrousel;
