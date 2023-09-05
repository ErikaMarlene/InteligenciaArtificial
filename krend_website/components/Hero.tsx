// rafce
"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Home from "../app/Comprar/page";

const Hero = () => {
  const handleScroll = () => {
  };
  return (
    <div className="hero">
      <div
        className="flex-1 pt-36 pb-36 padding-x flex flex-col md:flex-row"
        style={{
          backgroundImage: `url("/blur_fondo1.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex-1">
          <h1 className="hero__title text-center">
            Vende tu casa <br /> al precio justo
          </h1>

          <p className="hero__subtitle text-center">
            Utiliza nuestra herramienta de IA para vender tu
            <br /> casa sin moverte de tu sillón
          </p>
          <div className="flex items-center justify-center">
            <CustomButton
              title="Empieza aquí"
              containerStyles="bg-violeta text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
          </div>
        </div>

        <div className="flex-1 md:ml-6">
          <h1 className="hero__title text-center">
            Encuentra tu <br />
            casa ideal
          </h1>

          <p className="hero__subtitle text-center">
            Utiliza nuestro sistema de búsqueda para encontrar <br />
            la casa que se ajuste a TUS necesidades
          </p>
          <div className="flex items-center justify-center">
            <CustomButton
              title="Busca aquí"
              containerStyles="bg-violeta text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
