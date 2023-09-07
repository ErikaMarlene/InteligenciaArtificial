"use client";
import { useState } from "react";
import Image from "next/image";
import { HouseProps } from "@/types";
import CustomButton from "./CustomButton";
import { HouseDetails } from ".";

interface HouseCardProps {
  house: HouseProps;
}
const HouseCard = ({ house }: HouseCardProps) => {
  const {
    LotArea,
    Neighborhood,
    FullBath,
    BedroomAbvGr,
    GarageCars,
    SalePrice,
  } = house;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {Neighborhood}
        </h2>
        <h2 className="car-card__content-subtitle">{LotArea} ft&sup2;</h2>
      </div>
      <p className="flex mt-6 ml-12 text-[32px] font-extrabold text-center">
        <span className="self-start text-[14px] font-semibold">$</span>
        {SalePrice}
        <span className="self-end text-[14px] font-medium">usd</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/big_house.png"
          alt="house model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        {/* CAMBIAR */}
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/bedroom.svg" width={30} height={30} alt="bedroom" />
            <p className="text-[14px]">{BedroomAbvGr} Cuartos</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/garage.svg" width={30} height={20} alt="garage" />
            <p className="text-[14px] text-center">{GarageCars} Carros</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/bathroom.svg" width={35} height={40} alt="bathroom" />
            <p className="text-[14px]">{FullBath} Baños</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Ver más información"
            containerStyles="w-full py-[16px] rounded-full bg-violeta"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <HouseDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        house={house}
      />
    </div>
  );
};

export default HouseCard;
