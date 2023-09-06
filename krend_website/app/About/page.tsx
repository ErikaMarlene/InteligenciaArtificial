
import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title_s text-center">
          Acerca de nosotros
        </h1>
        <p className="hero__text text-justify ml-10">
        KREND es una empresa dedicada a ofrecer distintos servicios de compra-venta de casas,  con el objetivo de ayudar a nuestro público en su toma de decisiones, no únicamente con lo que respecta a la compra, si no, incluso, ofreciendo la oportunidad de determinar el precio para aquellos que buscan poner en venta su inmueble.  
Facilitamos la asesoría de valuación del inmueble sin costo y, sin necesidad de salir de donde esté.  
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
