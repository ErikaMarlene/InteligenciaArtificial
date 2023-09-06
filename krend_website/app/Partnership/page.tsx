import React from "react";
import Image from "next/image";

const Partnership = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title_s">Colabora con nosotros</h1>
        <p className="hero__subtitle">Compra</p>
        <p className="hero__text">
          - Personalización de ofertas de acuerdo a la necesidad de cada cliente <br/>
        </p>
        <p className="hero__text ml-10">
          -Tipo de Casa <br/>
          -Ubicación (Vecindario)
        </p>
        <p className="hero__subtitle">Venta</p>
        <p className="hero__text ml-5">
        Personalización de costo (valuación de inmueble) de acuerdo a las
        características del inmueble de cada usuario Personalización de costo
        (valuación de inmueble) de acuerdo a las necesidades de cada usuario
        (tiempo de venta estimado)
        </p>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/mansion.jpg"
            alt="partnership"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Partnership;
