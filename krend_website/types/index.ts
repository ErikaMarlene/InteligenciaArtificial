import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

// CAMBIAR
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface HouseProps{
  MSSubClass: number;
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
  SalePrice: number;
  // NO USAR NÚMEROS
  // 3SsnPorch: number;
  // NO USAR NÚMEROS
  // 1stFlrSF: number;
  // 2ndFlrSF: number;
}

// checar 2:27:54
export interface FilterProps {
  pageNumber?: number;
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface PropsFiltros {
  pageNumber?: number;
  street?: string;
  limit?: number;
  mszoning?: string;
  alley?: string;
  precio?: string;
  lotShapeOptions?: string;
  houseStyleOptions?: string;
  overallCondOptions?: string;
  saleConditionOptions?: string;
  heatingOptions?: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps{
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}