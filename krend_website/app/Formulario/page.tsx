"use client";

import Image from "next/image";
import React, { Component, ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Label, Select } from "flowbite-react";
import { FileInput, TextInput } from "flowbite-react";

import {
  Street,
  MSZoning,
  Alley,
  LotShapeOptions,
  LandContourOptions,
  UtilitiesOptions,
  LotConfigOptions,
  LandSlopeOptions,
  NeighborhoodOptions,
  Condition1Options,
  Condition2Options,
  BldgTypeOptions,
  HouseStyleOptions,
  OverallQualOptions,
  OverallCondOptions,
  RoofStyleOptions,
  RoofMatlOptions,
  Exterior1stOptions,
  Exterior2ndOptions,
  MasVnrTypeOptions,
  ExterQualOptions,
  ExterCondOptions,
  FoundationOptions,
  BsmtQualOptions,
  BsmtCondOptions,
  BsmtExposureOptions,
  BsmtFinType1Options,
  BsmtFinType2Options,
  HeatingOptions,
  HeatingQCOptions,
  CentralAirOptions,
  ElectricalOptions,
  KitchenQualOptions,
  FunctionalOptions,
  FireplaceQuOptions,
  GarageTypeOptions,
  GarageFinishOptions,
  GarageQualOptions,
  GarageCondOptions,
  PavedDriveOptions,
  PoolQCOptions,
  FenceOptions,
  MiscFeatureOptions,
  SaleTypeOptions,
  SaleConditionOptions,
} from "@/constants";
import { fetchHouses } from "@/utils";
import { useEffect } from "react";
import CustomButton from "@/components/CustomButton";
import ValorEstimado from "../ValorEstimado/page";
declare global {
  interface Window {
    responseData: {
      id: number;
      SalePrice: string; // Este se tendria que cambiar por el Sale price
    };
  }
}

function formulario() {
  async function comunica() {
    // Consumiendo el servicio POST
    const respuesta = await fetch("http://localhost:8081/casas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state), // Envía el objeto state completo
    });

    // Imprimir lo que responde el servidor
    const responseData = await respuesta.json();
    console.log(responseData);
    window.responseData = responseData;

    localStorage.setItem("responseData", JSON.stringify(responseData));

    console.log(typeof responseData);

  }

  const [state, setState] = useState({
    id: "",
    MSZoning: "",
    LotFrontage: "",
    LotArea: "",
    Street: "",
    Alley: "",
    LotShape: "",
    LandContour: "",
    Utilities: "",
    LotConfig: "",
    LandSlope: "",
    Neighborhood: "",
    Condition1: "",
    Condition2: "",
    BldgType: "",
    HouseStyle: "",
    OverallQual: "",
    OverallCond: "",
    YearBuilt: "",
    YearRemodAdd: "",
    RoofStyle: "",
    RoofMatl: "",
    Exterior1st: "",
    Exterior2nd: "",
    MasVnrType: "",
    MasVnrArea: "",
    ExterQual: "",
    ExterCond: "",
    Foundation: "",
    BsmtQual: "",
    BsmtCond: "",
    BsmtExposure: "",
    BsmtFinType1: "",
    BsmtFinSF1: "",
    BsmtFinType2: "",
    BsmtFinSF2: "",
    BsmtUnfSF: "",
    TotalBsmtSF: "",
    Heating: "",
    HeatingQC: "",
    CentralAir: "",
    Electrical: "",
    FirstFlrSF: "",
    SecondFlrSF: "",
    LowQualFinSF: "",
    GrLivArea: "",
    BsmtFullBath: "",
    BsmtHalfBath: "",
    FullBath: "",
    HalfBath: "",
    BedroomAbvGr: "",
    KitchenAbvGr: "",
    KitchenQual: "",
    TotRmsAbvGrd: "",
    Functional: "",
    Fireplaces: "",
    FireplaceQu: "",
    GarageType: "",
    GarageYrBlt: "",
    GarageFinish: "",
    GarageCars: "",
    GarageArea: "",
    GarageQual: "",
    GarageCond: "",
    PavedDrive: "",
    WoodDeckSF: "",
    OpenPorchSF: "",
    EnclosedPorch: "",
    ThreeSsnPorch: "",
    ScreenPorch: "",
    PoolArea: "",
    PoolQC: "",
    Fence: "",
    MiscFeature: "",
    MiscVal: "",
    MoSold: "",
    YrSold: "",
    SaleType: "",
    SaleCondition: "",
    SalePrice: "",
  });
  useEffect(() => {
    localStorage.setItem("MiscVal", "");
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    if (state.MiscVal !== "") {
      localStorage.setItem("MiscVal", state.MiscVal);
    }
  });
  const [output, setOutput] = useState('');

  const runPythonScript = async () => {
    try {
      const response = await fetch('../Api/runPython.ts', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setOutput(data.output);
      } else {
        console.error('Error al ejecutar el script de Python');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* Imagen de fondo */}
      <div
        className="flex-1 pt-36 pb-36 padding-x"
        style={{
          backgroundImage: 'url("/blur_mansion.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          minHeight: "100vh",
          position: "absolute", // Establecer la posición absoluta
          top: 0, // Anclar arriba
          left: 0, // Anclar a la izquierda
          right: 0, // Anclar a la derecha
          bottom: 0, // Anclar abajo
          filter: "blur(0px)",
        }}
      ></div>

      <div
        className="flex-1 pt-28 pb-1 padding-x"
        style={{
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
        <h1 className="hero__title text-left">
          Valua tu casa de forma rápida y sencilla!
        </h1>

        <p className="hero__subtitle">
          Revisa y llena el siguiente formulario para poder tener un valor de tu
          vivienda.
        </p>

        <form
          className="card-body"
          onSubmit={(e) => {
            e.preventDefault();
            comunica(); // Llama a la función comunica cuando se envía el formulario
          }}
        >
          <div className="mt-8">
            {/*Datos personales */}

            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Nombre" />
                </div>
                <TextInput id="small" sizing="sm" type="text" />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Apellido" />
                </div>
                <TextInput id="small" sizing="sm" type="text" />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="E-mail" />
                </div>
                <TextInput id="small" sizing="sm" type="text" />
              </div>
            </div>

            {/*Se inicia para seleccionar opciones predefinidas
            MSZoning*/}

            {/*MSSubClass*/}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="small"
                  value="Indica el tamaño de vivienda según corresponda del 20-190:"
                />
              </div>
              <TextInput
                type="number"
                onChange={(e) =>
                  setState({ ...state, LotArea: e.target.value })
                }
                name="MSSubClass"
                className="form-control"
              />
            </div>

            <div className="max-w-md" id="select">
              <div className="mb-2 block">
                <Label
                  htmlFor="MSZoning"
                  value="Selecciona y llena con la información que corresponde con tu vivienda"
                />
              </div>
              <Select
                onChange={(e) =>
                  setState({ ...state, MSZoning: e.target.value })
                }
                name="MSZoning"
                className="form-control"
              >
                {MSZoning.map((zone, index) => (
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, LotFrontage: e.target.value })
                  }
                  name="LotFrontage"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, LotArea: e.target.value })
                  }
                  name="LotArea"
                  className="form-control"
                />
              </div>

              {/*Street */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) => setState({ ...state, Street: e.target.value })}
                name="Street"
                className="form-control"
              >
                {Street.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Alley */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) => setState({ ...state, Alley: e.target.value })}
                name="Alley"
                className="form-control"
              >
                {Alley.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*LotShape */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, LotShape: e.target.value })
                }
                name="LotShape"
                className="form-control"
              >
                {LotShapeOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*LandContour */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, LandContour: e.target.value })
                }
                name="LandContour"
                className="form-control"
              >
                {LandContourOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Utilities */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Utilities: e.target.value })
                }
                name="Utilities"
                className="form-control"
              >
                {UtilitiesOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*LotConfig */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, LotConfig: e.target.value })
                }
                name="LotConfig"
                className="form-control"
              >
                {LotConfigOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*LandSlope */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, LandSlope: e.target.value })
                }
                name="LandSlope"
                className="form-control"
              >
                {LandSlopeOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Neighborhood */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Neighborhood: e.target.value })
                }
                name="Neighborhood"
                className="form-control"
              >
                {NeighborhoodOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Condition1 */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Condition1: e.target.value })
                }
                name="Condition1"
                className="form-control"
              >
                {Condition1Options.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Condition2 */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Condition2: e.target.value })
                }
                name="Condition2"
                className="form-control"
              >
                {Condition2Options.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*BlsgType */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, BldgType: e.target.value })
                }
                name="BldgType"
                className="form-control"
              >
                {BldgTypeOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*HouseStyle */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, HouseStyle: e.target.value })
                }
                name="HouseStyle"
                className="form-control"
              >
                {HouseStyleOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*OverallQual */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, OverallQual: e.target.value })
                }
                name="OverallQual"
                className="form-control"
              >
                {OverallQualOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*OverallCond */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, OverallCond: e.target.value })
                }
                name="OverallCond"
                className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, YearBuilt: e.target.value })
                  }
                  name="YearBuilt"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, YearRemodAdd: e.target.value })
                  }
                  name="YearRemodAdd"
                  className="form-control"
                />
              </div>

              {/*RoofStyle */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, RoofStyle: e.target.value })
                }
                name="RoofStyle"
                className="form-control"
              >
                {RoofStyleOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*RoofMatl */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, RoofMatl: e.target.value })
                }
                name="RoofMatl"
                className="form-control"
              >
                {RoofMatlOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Exterior1st */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Exterior1st: e.target.value })
                }
                name="Exterior1st"
                className="form-control"
              >
                {Exterior1stOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Exterior2nd */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Exterior2nd: e.target.value })
                }
                name="Exterior2nd"
                className="form-control"
              >
                {Exterior2ndOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*MasVnrType */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, MasVnrType: e.target.value })
                }
                name="MasVnrType"
                className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, MasVnrArea: e.target.value })
                  }
                  name="MasVnrArea"
                  className="form-control"
                />
              </div>

              {/*ExterQual */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, ExterQual: e.target.value })
                }
                name="ExterQual"
                className="form-control"
              >
                {ExterQualOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*ExterCond */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, ExterCond: e.target.value })
                }
                name="ExterCond"
                className="form-control"
              >
                {ExterCondOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Foundation */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Foundation: e.target.value })
                }
                name="Foundation"
                className="form-control"
              >
                {FoundationOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*BsmtQual */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, BsmtQual: e.target.value })
                }
                name="BsmtQual"
                className="form-control"
              >
                {BsmtQualOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*BsmtCond */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, BsmtCond: e.target.value })
                }
                name="BsmtCond"
                className="form-control"
              >
                {BsmtCondOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*BsmtExposure */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, BsmtExposure: e.target.value })
                }
                name="BsmtExposure"
                className="form-control"
              >
                {BsmtExposureOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*BsmtFinType1 */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, BsmtFinType1: e.target.value })
                }
                name="BsmtFinType1"
                className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, BsmtFinSF1: e.target.value })
                  }
                  name="BsmtFinSF1"
                  className="form-control"
                />
              </div>

              {/*BsmtFinType2 */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, BsmtFinType2: e.target.value })
                }
                name="BsmtFinType2"
                className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, BsmtFinSF2: e.target.value })
                  }
                  name="BsmtFinSF2"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, BsmtUnfSF: e.target.value })
                  }
                  name="BsmtUnfSF"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, TotalBsmtSF: e.target.value })
                  }
                  name="TotalBsmtSF"
                  className="form-control"
                />
              </div>

              {/*Heating */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Heating: e.target.value })
                }
                name="Heating"
                className="form-control"
              >
                {HeatingOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*HeatingQC */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, HeatingQC: e.target.value })
                }
                name="HeatingQC"
                className="form-control"
              >
                {HeatingQCOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*CentralAir */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, CentralAir: e.target.value })
                }
                name="CentralAir"
                className="form-control"
              >
                {CentralAirOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Electrical */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Electrical: e.target.value })
                }
                name="Electrical"
                className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, FirstFlrSF: e.target.value })
                  }
                  name="FirstFlSF"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, SecondFlrSF: e.target.value })
                  }
                  name="SecondFlrSF"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, LowQualFinSF: e.target.value })
                  }
                  name="LowQualFinSF"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, GrLivArea: e.target.value })
                  }
                  name="GrLivArea"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, BsmtFullBath: e.target.value })
                  }
                  name="BsmtFullBath"
                  className="form-control"
                />
              </div>

              {/*BsmtHalfBath */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Medios baños en el sótano:" />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, BsmtHalfBath: e.target.value })
                  }
                  name="BsmtHalfBath"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, FullBath: e.target.value })
                  }
                  name="FullBath"
                  className="form-control"
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
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, HalfBath: e.target.value })
                  }
                  name="HalfBath"
                  className="form-control"
                />
              </div>

              {/*Bedroom */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Dormitorios sobre el nivel del suelo:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, BedroomAbvGr: e.target.value })
                  }
                  name="BedroomAbvGr"
                  className="form-control"
                />
              </div>

              {/*Kitchen */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Cocinas sobre el nivel del suelo:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, KitchenAbvGr: e.target.value })
                  }
                  name="KitchenAbvGr"
                  className="form-control"
                />
              </div>

              {/*KitchenQual */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, KitchenQual: e.target.value })
                }
                name="KitchenQual"
                className="form-control"
              >
                {KitchenQualOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*TotRmsAbvGrd */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Total de habitaciones sobre el nivel del suelo (No incluye baños):"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, TotRmsAbvGrd: e.target.value })
                  }
                  name="TotRmsAbvGrd"
                  className="form-control"
                />
              </div>

              {/*Functional */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, Functional: e.target.value })
                }
                name="Functional"
                className="form-control"
              >
                {FunctionalOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Fireplaces */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Número de chimeneas:" />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, Fireplaces: e.target.value })
                  }
                  name="Fireplaces"
                  className="form-control"
                />
              </div>

              {/*FireplaceQu */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, FireplaceQu: e.target.value })
                }
                name="FireplaceQu"
                className="form-control"
              >
                {FireplaceQuOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*GarageType */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, GarageType: e.target.value })
                }
                name="GarageType"
                className="form-control"
              >
                {GarageTypeOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*GarageYrBlt */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Año de contrucción del garage:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, GarageYrBlt: e.target.value })
                  }
                  name="GarageYrBlt"
                  className="form-control"
                />
              </div>

              {/*GarageFinish */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, GarageFinish: e.target.value })
                }
                name="GarageFinish"
                className="form-control"
              >
                {GarageFinishOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*GarageCars */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Tamaño del garaje en capacidad de automóviles:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, GarageCars: e.target.value })
                  }
                  name="GarageCars"
                  className="form-control"
                />
              </div>

              {/*GarageArea */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Tamaño del garaje en pies cuadrados:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, GarageArea: e.target.value })
                  }
                  name="GarageArea"
                  className="form-control"
                />
              </div>

              {/*GarageQual */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, GarageQual: e.target.value })
                }
                name="GarageQual"
                className="form-control"
              >
                {GarageQualOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*GarageCond */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, GarageCond: e.target.value })
                }
                name="GarageCond"
                className="form-control"
              >
                {GarageCondOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*PavedDrive */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, PavedDrive: e.target.value })
                }
                name="PavedDrive"
                className="form-control"
              >
                {PavedDriveOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*WoodDeckSF */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Pies cuadrados de área de terraza de madera:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, WoodDeckSF: e.target.value })
                  }
                  name="WoodDeckSF"
                  className="form-control"
                />
              </div>

              {/*OpenPorchSF */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Pies cuadrados de área de porche abierto:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, OpenPorchSF: e.target.value })
                  }
                  name="OpenPorchSF"
                  className="form-control"
                />
              </div>

              {/*EnclosedPorch */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Pies cuadrados de área de porche cerrado:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, EnclosedPorch: e.target.value })
                  }
                  name="EnclosedPorch"
                  className="form-control"
                />
              </div>

              {/*3SsnPorch */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Área de Porche de Tres Estaciones en Pies Cuadrados:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, ThreeSsnPorch: e.target.value })
                  }
                  name="ThreeSsnPorch"
                  className="form-control"
                />
              </div>

              {/*ScreenPorch */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Área de Porche cubierto en Pies Cuadrados:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, ScreenPorch: e.target.value })
                  }
                  name="ScreenPorch"
                  className="form-control"
                />
              </div>

              {/*PoolArea */}
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="small"
                    value="Área de la Piscina en Pies Cuadrados:"
                  />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, PoolArea: e.target.value })
                  }
                  name="PoolArea"
                  className="form-control"
                />
              </div>

              {/*PoolQC */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) => setState({ ...state, PoolQC: e.target.value })}
                name="PoolQC"
                className="form-control"
              >
                {PoolQCOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*Fence */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) => setState({ ...state, Fence: e.target.value })}
                name="Fence"
                className="form-control"
              >
                {FenceOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*MiscFeature */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, MiscFeature: e.target.value })
                }
                name="MiscFeature"
                className="form-control"
              >
                {MiscFeatureOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*MiscVal */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Valor Misceláneo en Dólares:" />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, MiscVal: e.target.value })
                  }
                  name="MiscVal"
                  className="form-control"
                />
              </div>

              {/*MoSold */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Mes de Venta (MM):" />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, MoSold: e.target.value })
                  }
                  name="MoSold"
                  className="form-control"
                />
              </div>

              {/*YrSold */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Año de Venta (AAAA):" />
                </div>
                <TextInput
                  type="number"
                  onChange={(e) =>
                    setState({ ...state, YrSold: e.target.value })
                  }
                  name="YrSold"
                  className="form-control"
                />
              </div>

              {/*SaleType */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, SaleType: e.target.value })
                }
                name="SaleType"
                className="form-control"
              >
                {SaleTypeOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>

              {/*SaleCondition */}
              <div className="mb-2 block"></div>
              <Select
                onChange={(e) =>
                  setState({ ...state, SaleCondition: e.target.value })
                }
                name="SaleCondition"
                className="form-control"
              >
                {SaleConditionOptions.map((zone, index) => (
                  <option key={index} value={zone.value}>
                    {zone.title}
                  </option>
                ))}
              </Select>
            </div>

            {/*Subir archivo */}
            <div className="max-w-md" id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Subir archivo" />
              </div>
              <FileInput helperText="Subir planos de la vivienda" id="file" />
            </div>

            {/*Boton de submit */}

            <div className="ml-10 mb-5 justify-center">
              <CustomButton
                title="Estimar"
                containerStyles="bg-violeta text-white rounded-full w-80"
                handleClick={async() => {
                  await runPythonScript();
                  window.location.href = "/ValorEstimado";
                }}
                btnType="submit"
              />
              {output && <div>Salida de Python: {output}</div>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default formulario;
