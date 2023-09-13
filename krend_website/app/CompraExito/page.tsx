"use client";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";


const CompraExito = () => {
  return (
    <div
      className="flex-1 padding-x flex flex-col md:flex-row"
      style={{
        backgroundImage: `url("/fondo_general.png")`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="hero">
        <div className="hero__image-container_s">
          <div className="hero__image_s">
            <Image
              src="/blue_house.png"
              alt="about"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex-1 pt-36 padding-x">
          <h1 className="text-6xl font-bold text-center text-blue-800 my-10">
            ¡Felicidades!
          </h1>

          <p className="hero__text text-justify mt-4">
            ¡KREND te felicita! Tu compra se ha realizado de manera exitosa. Tu nuevo hogar te espera y se encuentra en: 
          </p>

{/* JALAR PRECIO DEL STATE DE LA API */}
          <p className="hero__subtitle_s text-center my-5"> DIRECCIÓN</p>
          <div className="flex justify-center">
          <a href="/">
            <CustomButton
              title="Finalizar"
              containerStyles="bg-violeta text-white rounded-full"
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompraExito;