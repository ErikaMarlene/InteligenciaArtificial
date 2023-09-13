"use client";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";


const ValorEstimado = () => {
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
            Resultados
          </h1>

          <p className="hero__text text-justify mt-4">
            Tomando en cuenta todas las características de tu propiedad, tu casa tiene
            un valor estimado de:
          </p>

{/* JALAR PRECIO DEL STATE DE LA API */}
          <p className="hero__subtitle_s text-center my-5"> $XX,XXX,XXX USD</p>
          <div className="flex justify-center">
          <a href="/">
            <CustomButton
              title="Publicarla"
              containerStyles="bg-violeta text-white rounded-full"
            />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValorEstimado;
