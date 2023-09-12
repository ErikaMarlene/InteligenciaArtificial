import React from "react";
import Image from "next/image";

const Partnership = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-center text-blue-800 my-10">
        Colabora con nosotros
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        <div className="text-2xl font-bold text-blue-800 mb-4">
          <p>Compra</p>
        </div>
        <div>
          <ul className="list-disc list-inside pl-4 text-base text-gray-800">
            <li className="mb-2">
              Personalización de ofertas según las necesidades de cada cliente
            </li>
            <li className="mb-2">
              Diversidad de tipos de viviendas
            </li>
            <li>
              Ubicaciones ideales en cada vecindario
            </li>
          </ul>
        </div>
        <div className="text-2xl font-bold text-blue-800 mb-4">
          <p>Venta</p>
        </div>
        <div>
          <p className="text-base text-gray-800">
            Ofrecemos una valoración personalizada de propiedades, considerando las características únicas de cada propiedad y las necesidades individuales de nuestros clientes. También proporcionamos estimaciones precisas del tiempo de venta.
          </p>
        </div>
        <div className="col-span-2">
          <div className="relative h-96">
            <Image
              src="/mansion.jpg"
              alt="partnership"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-900 opacity-70 hover:opacity-80 transition-opacity duration-300 ease-in-out rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;