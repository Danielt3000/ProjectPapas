import React, { useState, useRef } from "react";
import { Card, Carousel, Button, Tabs } from "flowbite-react";
import CardInside from "./CardInside";

function CardPotatosSmall() {
  const [activeTab, setActiveTab] = useState(0);

  const items = [
    {
      img: "https://agrotendencia.tv/wp-content/uploads/2019/10/agrotendencia-papa-20.jpg",
      nombre: "Papa Fina",
      carousel: [
        "https://www.tasteatlas.com/images/ingredients/dddd72f997c544a28a2d74798c65aaaa.jpg",
        "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750,f_auto/f_auto/Robyns-Blog-Template--2023-09-26T102652824-phpp0gWya",
        "https://www.theseedcollection.com.au/assets/full/Z-POT-01.jpg?20210722143729",
      ],

      descripcion:
        " Papa Fina: Versátil tubérculo cultivado globalmente, esencial en la dieta, valorado por su sabor y textura en diversas preparaciones culinarias.",
    },
    {
      img: "https://i0.wp.com/www.asausagehastwo.com/wp-content/uploads/2014/04/IMG_1570.jpg?resize=770%2C578&ssl=1",
      nombre: "Papa Agata",
      carousel: [
        "https://www.yesilmesetarim.com.tr/en/images/product/everest.jpg",
        "https://static.pourdebon.com/images/500-370/63e94430c46546506e0b77f5ee2f3a1b/pommes_de_terre_agata.jpeg",
        "https://www.picturethisai.com/wiki-image/1080/82A53F5F34C54E2591AE92876343F403.jpeg",
      ],

      descripcion:
        " Agatha: piel fina, carne amarilla, apreciada por su sabor y textura en diferentes platillos.",
    },
    {
      img: "https://www.foodformzansi.co.za/wp-content/uploads/2018/11/potatoes-1585075_1920.jpg",
      nombre: "Papa Orquesta",
      carousel: [
        "https://turntable.kagiso.io/images/Screenshot_2022-08-25_at_11.06.14.width-800.png",
        "https://www.foodformzansi.co.za/wp-content/uploads/2022/01/Potatoes-EDIT.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUwpJVNSQw7zgBzOwFDFVMZsr3ng0desfu3X4ltKs7ZDvNqr8yybs60iqOd8PRO02xzc&usqp=CAU",
      ],

      descripcion:
        " Papa Orquesta: Tubérculo excepcional, reconocido por su amplia gama de formas y sabores, una verdadera variedad culinaria.",
    },
  ];

  return (
    <div className="mt-10">
      <p className=" -mt-10 absolute text-xs text-black    py-2 px-3 rounded-lg bg-[#FEA423] w-fit">
        Nuestas Papas
      </p>
      <h1 className="text-center text-4xl font-bold mt-16 ">
        Nuestros Productos
      </h1>

      <div className="flex justify-center mt-5">
        <Tabs
          aria-label="Default tabs"
          style="default"
          onActiveTabChange={(tab) => setActiveTab(tab)}
          className=" flex !justify-around"
        >
          <Tabs.Item active title={items[0].nombre}>
            <CardInside items={items[0]} activeTab={activeTab} />

            <p className="w-10/12 mx-auto px-2 font-medium mt-4">
              {items[0].descripcion}
            </p>
          </Tabs.Item>
          <Tabs.Item title={items[1].nombre}>
            <CardInside items={items[1]} activeTab={activeTab} />
            <p className="w-10/12 mx-auto px-2 font-medium mt-4 text-left">
              {items[1].descripcion}
            </p>
          </Tabs.Item>
          <Tabs.Item title={items[2].nombre}>
            <CardInside items={items[2]} activeTab={activeTab} />
            <p className="w-10/12 mx-auto px-2 font-medium mt-4">
              {items[2].descripcion}
            </p>
          </Tabs.Item>
        </Tabs>
      </div>

      <div className="container m-auto px-6">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-1">
          <Carousel pauseOnHover>
            <img src={items[activeTab].carousel[0]} alt="..." />
            <img src={items[activeTab].carousel[1]} alt="..." />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CardPotatosSmall;
