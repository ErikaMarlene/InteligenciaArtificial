"use client";
import {
  CustomFilter,
  HouseCard,
  SearchBar,
  ShowMore,
  LoadingSpinner,
} from "@/components";
import {
  Street,
  MSZoning,
  Alley,
  Precio,
  LotShapeOptions,
  HouseStyleOptions,
  OverallCondOptions,
  SaleConditionOptions,
  HeatingOptions,
} from "@/constants";
import { fetchHouses } from "@/utils";
import { useEffect, useState } from "react";

// Podemos pasarle {parámetros}
export default function Home() {
  const [allHouses, setAllHouses] = useState([]);
  const [loading, setLoading] = useState(false);

  //filter states
  const [street, setStreet] = useState("");
  const [mszoning, setMszoning] = useState("");
  const [alley, setAlley] = useState("");
  const [precio, setPrecio] = useState("");
  const [lotShapeOptions, setLotShapeOptions] = useState("");
  const [houseStyleOptions, setHouseStyleOptions] = useState("");
  const [overallCondOptions, setOverallCondOptions] = useState("");
  const [saleConditionOptions, setSaleConditionOptions] = useState("");
  const [heatingOptions, setHeatingOptions] = useState("");
  //pagination state
  const [limit, setLimit] = useState(10);

  const getHouses = async () => {
    setLoading(true);
    try {
      const result = await fetchHouses({
        street: street || "?",
        limit: limit || 10,
        mszoning: mszoning || "?",
        alley: alley || "?",
        precio: precio || "desc",
        lotShapeOptions: lotShapeOptions || "?",
        houseStyleOptions: houseStyleOptions || "?",
        overallCondOptions: overallCondOptions || "?",
        saleConditionOptions: saleConditionOptions || "?",
        heatingOptions: heatingOptions || "?",
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
  }, [
    street,
    limit,
    mszoning,
    alley,
    precio,
    lotShapeOptions,
    houseStyleOptions,
    overallCondOptions,
    saleConditionOptions,
    heatingOptions,
  ]);

  const isDataEmpty =
    !Array.isArray(allHouses) || allHouses.length < 1 || !allHouses;

  return (
    <main className="overflow-hidden pt-[50px]">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de Casas</h1>
          <p className="hero__subtitle">
            Explora las casas que pueden ser de tu interés.
          </p>
        </div>

        <div className="home__filters">
        <div className="home__filter-container">
            <p className="text-xl font-semibold">Ordenar por:</p>
            <CustomFilter
              title="Precio"
              options={Precio}
              setFilter={setPrecio}
            />
          </div>
          <div className="home__filter-container">
            <p className="text-xl font-semibold">Filtrar por:</p>

            <CustomFilter
              title="MSZoning"
              options={MSZoning}
              setFilter={setMszoning}
            />
            <CustomFilter
              title="Street"
              options={Street}
              setFilter={setStreet}
            />
            <CustomFilter title="Alley" options={Alley} setFilter={setAlley} />
            <CustomFilter
              title="LotShapeOptions"
              options={LotShapeOptions}
              setFilter={setLotShapeOptions}
            />
            <CustomFilter
              title="HouseStyleOptions"
              options={HouseStyleOptions}
              setFilter={setHouseStyleOptions}
            />
            <CustomFilter
              title="OverallCondOptions"
              options={OverallCondOptions}
              setFilter={setOverallCondOptions}
            />
            <CustomFilter
              title="SaleConditionOptions"
              options={SaleConditionOptions}
              setFilter={setSaleConditionOptions}
            />
            <CustomFilter
              title="HeatingOptions"
              options={HeatingOptions}
              setFilter={setHeatingOptions}
            />
          </div>

          
        </div>

        {loading ? (
          <div className="mt-16 w-full flex-center">
            <LoadingSpinner />
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {allHouses?.map((house) => (
                <HouseCard house={house} />
              ))}
            </div>
          </section>
        )}

        {isDataEmpty && (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no hay resultados
            </h2>
            <p>{allHouses?.message}</p>
          </div>
        )}
        <ShowMore
          pageNumber={limit / 10}
          isNext={limit > allHouses.length}
          setLimit={setLimit}
        />
      </div>
    </main>
  );
}
