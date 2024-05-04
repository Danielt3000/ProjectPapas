import React from "react";
import { Card, Carousel } from "flowbite-react";

function CardPotatos() {
  const img = [
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
      <p className="-ml-10 absolute text-xs text-black    py-2 px-3 rounded-lg bg-[#FEA423] w-fit">
        Nuestas Papas
      </p>
      <h1 className="text-center text-4xl font-bold ">Nuestros Productos</h1>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {img.map((item) => {
          return (
            <div>
              <div key={Math.random(2 * 23)}>
                <Card className="max-w-sm w-[100%]">
                  <img
                    className="w-full h-48 object-cover p-0"
                    src={item.img}
                    alt="Potato1"
                  />
                  <div className="p-0">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.nombre}
                    </h5>
                  </div>
                </Card>
              </div>

              <div className="h-[300px] mt-5 w-[300px]  rounded-md ml-6">
                <Carousel pauseOnHover>
                  <img
                    className="object-contain w-full h-full"
                    src={item.carousel[0]}
                    alt=""
                  />
                  <img
                    className="object-contain w-full h-full"
                    src={item.carousel[1]}
                    alt=""
                  />
                  <img
                    className="object-contain w-full h-full"
                    src={item.carousel[2]}
                    alt=""
                  />
                </Carousel>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardPotatos;
