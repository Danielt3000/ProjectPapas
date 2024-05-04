import React, { useState, useEffect } from "react";

import Navbar from "./Navbar/Navbar";
import video from "../components/assets/potato.mov";
import LazyLoadedVideo from "./LazyLoadedVideo/LazyLoadedVideo";
import Card from "./Card/Card";
import Carrousel from "./Carrousel/Carrousel";
import CardPotatos from "./Card/CardPotatos";
import CardPotatosSmall from "./Card/cardPotatosSmall";
import Local from "./Local/Local";
import LocalBig from "./Local/LocalBig";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function Home() {
  const [width, useWidth] = useState(window.innerWidth);
  console.log(width);

  useEffect(() => {
    window.addEventListener("resize", () => useWidth(window.innerWidth));
  }, []);

  return (
    <div>
      <div className="hero sm:h-[400px]">
        <LazyLoadedVideo src={video} />
      </div>
      <Navbar />
      <div className=" index  z-50  text-3xl  sm:text-4xl     md:text-5xl text-center text-white mt-10  md:mt-20 bg-[#00000042] py-5">
        <h1 className=" w-9/12   sm:w-7/12   md:w-10/12 lg:w-6/12 mx-auto">
          Tu Solución de Papas: Patatas Impecables, Potencia Industrial.
        </h1>
        <button
          className="bg-[#21209C] mt-5 md:mt-10 text-white active:bg-[#21209C] font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Contactanos
        </button>
      </div>
      <div className="md:px-20">
        <section className="mt-38">
          <p className=" ml-3 -mt-10 absolute text-xs text-black   py-2 px-3 rounded-lg bg-[#FEA423] w-fit">
            Nuestra Vision
          </p>
          <h1 className="mt-32  text-center text-4xl font-bold">
            Cual es Nuestro Proposito ?
          </h1>
          <Card />
        </section>
        <section id="nostros">
          <p className="ml-3 -mt-10 absolute text-xs text-black   py-2 px-3 rounded-lg bg-[#FEA423] w-fit">
            Sobre Nosotros
          </p>
          <div className="container m-auto px-6">
            <div className="lg:flex justify-around md:gap-10 md:w-9/12 md:mx-auto">
              <h1 className=" w-full     md:text-3xl  xl:text-4xl  xl:mx-auto font-bold max-md:text-center  md:leading-9 md:mt-10">
                Lavando papas para llevarlo a su lugar mas cercano y como
                amdinistrarlo
              </h1>
              <p className="lg:w-9/12 xl:w-9/12 max-lg:mt-10 leading-8  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dolorum facilis maiores dolorem atque, amet earum! Dolore dolor
                blanditiis inventore dolorum nostrum veritatis, numquam,
                praesentium, esse velit animi officiis quos! Lorem ipsum dolor
                sit amet consectetur
              </p>
            </div>
            <div>
              <Carrousel />
            </div>
          </div>
        </section>
        <section>
          {width > 768 ? <CardPotatos /> : <CardPotatosSmall />}
        </section>
        <section>
          <div className="mt-10">{width > 800 ? <LocalBig /> : <Local />}</div>
        </section>
      </div>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
