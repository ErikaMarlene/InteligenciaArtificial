'use client';
import React from 'react';
import Image from "next/image";


import { Label, Select } from 'flowbite-react';
import { FileInput, TextInput } from 'flowbite-react';

import { Street, MSZoning, Alley } from "@/constants";
import { fetchHouses } from "@/utils";
import { useEffect, useState } from "react";




const formulario = () => {
  const [allHouses, setAllHouses] = useState([]);
  const [loading, setLoading] = useState(false);

  //search states

  //filter states
  const [street, setStreet] = useState("");
  const [mszoning, setMszoning] = useState("");
  const [alley, setAlley] = useState("");
  //pagination state
  const [limit, setLimit] = useState(10);

  const getHouses = async () => {
    setLoading(true);
    try {
      const result = await fetchHouses({
        street: street || "",
        limit: limit || 10,
        mszoning: mszoning || "",
        alley: alley || "",
      });
      setAllHouses(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getHouses();
  }, [street, limit, mszoning, alley]);

  const isDataEmpty =
    !Array.isArray(allHouses) || allHouses.length < 1 || !allHouses;

  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Valua tu casa de forma rápida y sencilla!
        </h1>

        <p className="hero__subtitle">
          Revisa y llena el siguiente formulario para poder tener un valor de tu vivienda.
        </p>
        
        <div className="mt-8">
          {/*Datos personales */}

          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Nombre"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Apellido"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="E-mail"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>
          </div>


           {/*Se inicia para seleccionar opciones predefinidas*/ }
          <div
          className="max-w-md"
          id="select"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="mszoning"
                value="Selecciona la informacion que corresponde con tu vivienda"
              />
            </div>
            <Select
              id="venta"
              required
            >
              {MSZoning.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Street */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {Street.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Alley */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {Alley.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>
          </div>



          {/*Subir archivo */}
          <div
            className="max-w-md"
            id="fileUpload"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="file"
                value="Upload file"
              />
            </div>
            <FileInput
              helperText="Subir planos de la vivienda"
              id="file"
            />
          </div>


          {/*Boton de submit */}
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/mansion.jpg" alt="about" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default formulario;