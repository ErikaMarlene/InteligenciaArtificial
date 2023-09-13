'use client';
import React from 'react';
import Image from "next/image";


import { Label, Select } from 'flowbite-react';
import { FileInput, TextInput } from 'flowbite-react';

import { Street, MSZoning, Alley, LotShapeOptions, LandContourOptions, UtilitiesOptions, LotConfigOptions, LandSlopeOptions, NeighborhoodOptions, Condition1Options, Condition2Options, BldgTypeOptions, HouseStyleOptions, OverallQualOptions, OverallCondOptions, RoofStyleOptions, RoofMatlOptions, Exterior1stOptions, Exterior2ndOptions, MasVnrTypeOptions, ExterQualOptions, ExterCondOptions, FoundationOptions, BsmtQualOptions, BsmtCondOptions, BsmtExposureOptions, BsmtFinType1Options, BsmtFinType2Options, HeatingOptions, HeatingQCOptions, CentralAirOptions, ElectricalOptions, KitchenQualOptions, FunctionalOptions, FireplaceQuOptions, GarageTypeOptions, GarageFinishOptions, GarageQualOptions, GarageCondOptions, PavedDriveOptions, PoolQCOptions, FenceOptions, MiscFeatureOptions, SaleTypeOptions, SaleConditionOptions } from "@/constants";
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
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Imagen de fondo */}
      <div
        className="flex-1 pt-36 pb-36 padding-x"
        style={{
          backgroundImage: 'url("/blur_mansion.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          minHeight: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          filter: 'blur(0px)',
        }}
      ></div>

      <div className="flex-1 pt-36 padding-x" style={{ position: "relative", zIndex: 1, margin: '0 auto', maxWidth: '800px' }}>
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
         
 
            {/*SaleType */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {SaleTypeOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

             {/*LotFrontage */}
             <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies lineales de calle conectada a la propiedad:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*LotArea */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Tamaño del lote en pies cuadrados:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>
            

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

            {/*LotShape */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {LotShapeOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*LandContour */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {LandContourOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Utilities */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {UtilitiesOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*LotConfig */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {LotConfigOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*LandSlope */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {LandSlopeOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Neighborhood */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {NeighborhoodOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Condition1 */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {Condition1Options.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Condition2 */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {Condition2Options.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*BlsgType */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {BldgTypeOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*HouseStyle */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {HouseStyleOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*OverallQual */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {OverallQualOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*OverallCond */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {OverallCondOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*YearBuilt */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Año de construcción original:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*YearRemodAdd */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Año de remodelación (Si no hay remodelación, es la misma que la fecha de construcción):"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*RoofStyle */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {RoofStyleOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*RoofMatl */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {RoofMatlOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Exterior1st */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {Exterior1stOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Exterior2nd */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {Exterior2ndOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*MasVnrType */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {MasVnrTypeOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*MasVnrArea */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Área de revestimiento de mampostería en pies:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*ExterQual */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {ExterQualOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*ExterCond */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {ExterCondOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Foundation */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {FoundationOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*BsmtQual */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {BsmtQualOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*BsmtCond */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {BsmtCondOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*BsmtExposure */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {BsmtExposureOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*BsmtFinType1 */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {BsmtFinType1Options.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*BsmtFinSF1 */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies cuadrados de área terminada del tipo 1 del sótano:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*BsmtFinType2 */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {BsmtFinType2Options.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*BsmtFinSF2 */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies cuadrados de área terminada del tipo 2 del sótano:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*BsmtUnfSF */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies cuadrados sin terminar del sótano:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*TotalBsmtSF */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies cuadrados totales del sótano:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*Heating */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {HeatingOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*HeatingQC */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {HeatingQCOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*CentralAir */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {CentralAirOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Electrical */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {ElectricalOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*1stFlrSF */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies cuadrados del primer piso:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*2ndFlrSF */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies cuadrados del segundo piso:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*LowQualFinSF */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies cuadrados de área termianda de baja calidad:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*GrLivArea */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Pies cuadrados de área habitable sobre el nivel del suelo:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*BsmtFullBath */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Baños completos en el sótano:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*BsmtHalfBath */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Medios baños en el sótano:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*FullBath */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Baños completos sobre el nivel del suelo:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>

            {/*HalfBath */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Medios baños sobre el nivel del suelo:"
                />
              </div>
              <TextInput
                id="small"
                sizing="sm"
                type="text"
              />
            </div>


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

            {/*LotShape */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {LotShapeOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*LandContour */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {LandContourOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*Utilities */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {UtilitiesOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*LotConfig */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {LotConfigOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>

            {/*SaleCondition */}
            <div className="mb-2 block">
            </div>
            <Select
              id="venta"
              required
            >
              {SaleConditionOptions.map((zone, index) => (
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
                value="Subir archivo"
              />
            </div>
            <FileInput
              helperText="Subir planos de la vivienda"
              id="file"
            />
          </div>



        {/*Boton de submit */}
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Estimar</button>
        </div>
        </div>



    


    


  
    </div>
    
  );
};

export default formulario;