import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
      <h1 className="text-6xl font-bold text-center text-blue-800 my-10">
        Acerca de nosotros
        </h1>

        <p className="hero__text text-justify mt-4">
          KREND es una empresa dedicada a ofrecer diversos servicios de compra y venta de viviendas. Nuestro objetivo es ayudar a nuestros clientes en la toma de decisiones, ya sea comprando una propiedad o determinando el precio adecuado para venderla.
        </p>
        <p className="hero__text text-justify mt-4">
          Ofrecemos asesoría gratuita en la valuación de propiedades, todo desde la comodidad de su hogar, sin necesidad de desplazarse.
        </p>
      </div>
      <div className="hero__image-container_s">
        <div className="hero__image_s">
        <Image src="/house.png" alt="about" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay_s" />
      </div>
    </div>
  );
};

export default About;
