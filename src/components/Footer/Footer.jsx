import React from "react";
import logo from "../assets/logo4.png";
function Footer() {
  return (
    <div>
      <footer class="bg-white dark:bg-gray-900  lg:pt-20">
        <div class="container px-6 py-8 mx-auto">
          <div class="flex flex-col items-center text-center">
            <a href="#">
              <img class="w-[120px] h-[80px]" src={logo} alt="" />
            </a>

            <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
              100% PAPA MEXICANA
            </p>
          </div>

          <hr class="my-4 border-gray-200 dark:border-gray-700" />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500">
              © Copyright 2024. All Rights Reserved.
            </p>

            <div class="flex mt-2 -mx-2 sm:mt-0">
              <a
                href="#"
                class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Inicio{" "}
              </a>

              <a
                href="#"
                class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Nosotros{" "}
              </a>

              <a
                href="#"
                class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Contacto{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
