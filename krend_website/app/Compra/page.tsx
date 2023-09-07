"use client";
import {
  CustomFilter,
  HouseCard,
  SearchBar,
  ShowMore,
  LoadingSpinner,
} from "@/components";
import { Street } from "@/constants";
import { fetchHouses } from "@/utils";
import { useEffect, useState } from "react";
import Image from "next/image";

// Podemos pasarle {parámetros}
export default function Home() {
  const [allHouses, setAllHouses] = useState([]);
  const [loading, setLoading] = useState(false);

  //search states
  

  //filter states
  const [street, setStreet] = useState("");

  //pagination state
  const [limit, setLimit] = useState(10);

  const getHouses = async () => {
    setLoading(true);
    try {
      const result = await fetchHouses({
        street: street || "",
        limit: limit || 10,
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
  }, [street, limit]);

  const isDataEmpty = !Array.isArray(allHouses) || allHouses.length < 1 || !allHouses;

  return (
    <main className="overflow-hidden pt-[50px]">

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de Casas</h1>
          <p className="hero__subtitle">Explora las casas que pueden ser de tu interés.</p>
        </div>

        <div className="home__filters">
          {/* <SearchBar setManufacturer={setManufacturer} setModel={setModel} /> */}

          <div className="home__filter-container">
            <p className="text-xl font-semibold">Ordenar por:</p>
            {/* CAMBIAR TITLE */}
            <CustomFilter title="Street" options={Street} setFilter={setStreet} />
{/*             <CustomFilter
              title="Street"
              options={yearsOfProduction}
              setFilter={setYear}
            /> */}
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
              {/* Oops, no hay resultados */}
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
