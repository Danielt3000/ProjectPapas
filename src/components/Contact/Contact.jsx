import React from "react";

function Contact() {
  return (
    <div className="mt-10" id="contact">
      <span className="ml-10 absolute xl:ml-32 mt-10 text-xs text-black font-bold py-2 px-3 rounded-lg bg-[#FEA423] w-fit">
        Contactanos
      </span>
      <div class="flex justify-center items-center w-screen bg-white pt-20  ">
        <div class="container mx-auto  lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div class="flex">
              <h1 class="font-bold uppercase text-5xl">
                envianos un <br /> mensaje
              </h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nombre*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Apellido*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="E-mail*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Telefono*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Mensaje*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-[#1a1a61f4] text-white p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                ENVIAR
              </button>
            </div>
          </div>

          <div class="w-full lg:-mt-[600px] lg:w-2/6 px-8 py-12 ml-auto bg-[#1a1a61f4] rounded-2xl">
            <div class="flex flex-col text-white">
              <h1 class="font-bold uppercase text-3xl my-2">
                El clasico regio te espera
              </h1>
              <p class="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div class="flex my-4 ">
                <div class="flex flex-col">
                  <i class="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div class="flex flex-col">
                  <h2 class="text-2xl">Ubicacion</h2>
                  <p class="text-gray-200">
                    Avenida Los Ángeles #1000, Interior 258, Mercado de Abastos
                    "Estrella", San Nicolas de los Garza, Nuevo León, México
                  </p>
                </div>
              </div>

              <div class="flex my-4">
                <div class="flex flex-col">
                  <h2 class="text-2xl">Llamanos</h2>
                  <p class="text-gray-200 mt-2">Tel: +52 (818)-256-1898</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
