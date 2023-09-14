"use client";
import React, { Component, ChangeEvent, FormEvent, useState, useEffect } from 'react';

// Importa SaleConditionOptions si aún no está importado
import { SaleConditionOptions } from "@/constants"; 
import { Label, Select, TextInput } from 'flowbite-react';



function Formulario() {
  
  //interface CasaData {
    /* id?: number,
    MSZoning: string;
    LotFrontage: number;
    LotArea: number;
    Street: string;
    Alley: string;
    LotShape: string;
    LandContour: string;
    Utilities: string;
    LotConfig: string;
    LandSlope: string;
    Neighborhood: string;
    Condition1: string;
    Condition2: string;
    BldgType: string;
    HouseStyle: string;
    OverallQual: number;
    OverallCond: number;
    YearBuilt: number;
    YearRemodAdd: number;
    RoofStyle: string;
    RoofMatl: string;
    Exterior1st: string;
    Exterior2nd: string;
    MasVnrType: string;
    MasVnrArea: number;
    ExterQual: string;
    ExterCond: string;
    Foundation: string;
    BsmtQual: string;
    BsmtCond: string;
    BsmtExposure: string;
    BsmtFinType1: string;
    BsmtFinSF1: number;
    BsmtFinType2: string;
    BsmtFinSF2: number;
    BsmtUnfSF: number;
    TotalBsmtSF: number;
    Heating: string;
    HeatingQC: string;
    CentralAir: string;
    Electrical: string;
    FirstFlrSF: number;
    SecondFlrSF: number;
    LowQualFinSF: number;
    GrLivArea: number;
    BsmtFullBath: number;
    BsmtHalfBath: number;
    FullBath: number;
    HalfBath: number;
    BedroomAbvGr: number;
    KitchenAbvGr: number;
    KitchenQual: string;
    TotRmsAbvGrd: number;
    Functional: string;
    Fireplaces: number;
    FireplaceQu: string;
    GarageType: string;
    GarageYrBlt: number;
    GarageFinish: string;
    GarageCars: number;
    GarageArea: number;
    GarageQual: string;
    GarageCond: string;
    PavedDrive: string;
    WoodDeckSF: number;
    OpenPorchSF: number;
    EnclosedPorch: number;
    ThreeSsnPorch: number;
    ScreenPorch: number;
    PoolArea: number;
    PoolQC: string;
    Fence: string;
    MiscFeature: string;
    MiscVal: number;
    MoSold: number;
    YrSold: number;
    SaleType: string;
    SaleCondition: string;
    SalePrice: number; */
    //MiscVal: number;
//}


  async function comunica() {
    //const data: CasaData = {
      /* id: undefined,
      MSZoning: "RL",
      LotFrontage: 65.0,
      LotArea: 8450,
      Street: "Pave",
      Alley: "None",
      LotShape: "Reg",
      LandContour: "Lvl",
      Utilities: "AllPub",
      LotConfig: "Inside",
      LandSlope: "Gtl",
      Neighborhood: "CollgCr",
      Condition1: "Norm",
      Condition2: "Norm",
      BldgType: "1Fam",
      HouseStyle: "2Story",
      OverallQual: 7,
      OverallCond: 5,
      YearBuilt: 2003,
      YearRemodAdd: 2003,
      RoofStyle: "Gable",
      RoofMatl: "CompShg",
      Exterior1st: "VinylSd",
      Exterior2nd: "VinylSd",
      MasVnrType: "BrkFace",
      MasVnrArea: 196.0,
      ExterQual: "Gd",
      ExterCond: "TA",
      Foundation: "PConc",
      BsmtQual: "Gd",
      BsmtCond: "TA",
      BsmtExposure: "No",
      BsmtFinType1: "GLQ",
      BsmtFinSF1: 706,
      BsmtFinType2: "Unf",
      BsmtFinSF2: 0,
      BsmtUnfSF: 150,
      TotalBsmtSF: 856,
      Heating: "GasA",
      HeatingQC: "Ex",
      CentralAir: "Y",
      Electrical: "SBrkr",
      FirstFlrSF: 856,
      SecondFlrSF: 854,
      LowQualFinSF: 0,
      GrLivArea: 1710,
      BsmtFullBath: 1,
      BsmtHalfBath: 0,
      FullBath: 2,
      HalfBath: 1,
      BedroomAbvGr: 3,
      KitchenAbvGr: 1,
      KitchenQual: "Gd",
      TotRmsAbvGrd: 8,
      Functional: "Typ",
      Fireplaces: 0,
      FireplaceQu: "None",
      GarageType: "Attchd",
      GarageYrBlt: 2003.0,
      GarageFinish: "RFn",
      GarageCars: 2,
      GarageArea: 548,
      GarageQual: "TA",
      GarageCond: "TA",
      PavedDrive: "Y",
      WoodDeckSF: 0,
      OpenPorchSF: 61,
      EnclosedPorch: 0,
      ThreeSsnPorch: 0,
      ScreenPorch: 0,
      PoolArea: 0,
      PoolQC: "None",
      Fence: "None",
      MiscFeature: "None",
      MiscVal: 0,
      MoSold: 2,
      YrSold: 2008,
      SaleType: "WD",
      SaleCondition: "Normal",
      SalePrice: 208500 */
   //};
    // Consumiendo el servicio POST
    
    const respuesta = await fetch('http://localhost:8081/casas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state), // Envía el objeto state completo
    });
  
    // Imprimir lo que responde el servidor
    const responseData = await respuesta.json();
    console.log(responseData);
  }

  const [state,setState]=useState({

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
    SalePrice: ""
    //saleConditionValue: "", // Cambia el nombre de la propiedad en el estado
    //MiscVal: ""

    
})
  useEffect(()=>{
    localStorage.setItem('MiscVal','')

  },[])

  //ComponentDidUpdate
  useEffect(()=>{
    if(state.MiscVal!==''){
        
        localStorage.setItem('MiscVal',state.MiscVal)
        console.log(localStorage.getItem('saleCondition'))
        console.log(localStorage.getItem('MiscVal'))

             
    }
  })

    return (
      <div className="flex-1 pt-36 padding-x">
      <div className="card">
        <form
          className="card-body"
          onSubmit={(e) => {
            e.preventDefault();
            comunica(); // Llama a la función comunica cuando se envía el formulario
          }}
        >   
            <div className="mb-2 block">
              <Label
                htmlFor="small"
                value="Pies lineales de calle conectada a la propiedad:"
              />
            </div>
            <TextInput type="text" onChange={(e)=>setState({...state,MiscVal:e.target.value})} name="MiscVal" className="form-control"/>
           
             
             
            {/*SaleCondition */}
            <div className="mb-2 block">
            </div>
            <Select
              onChange={(e)=>setState({...state,SaleCondition:e.target.value})} name="SaleCondition" className="form-control">
            
              {SaleConditionOptions.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.title}
                </option>
              ))}
                        
            </Select>
            <button type="submit" className="btn btn-primary">
              Pedir carta
            </button>
          </form>
        </div>
      </div>
    );
  }





{/*

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
      {/* Imagen de fondo */}   /*}
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
            {/*Datos personales *//*}  /*

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


              {/*LotConfig *//*} /*
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

              {/*SaleCondition *//*} /*
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


            {/*Subir archivo *//*}/*
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



            {/*Boton de submit *//*}/*
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Estimar</button>
          </div>
          </div>
       



    


    


  
    </div>
    
  );
};  *//**/ 

export default Formulario;
