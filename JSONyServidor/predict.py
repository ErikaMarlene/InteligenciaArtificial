import joblib
import pandas as pd
import json
from flask import jsonify

def predicciones(json_file, modelo_path='./pipeline_houses_final.joblib'):
    modelo = joblib.load(modelo_path)
    
    with open(json_file, 'r') as archivo:
        casas_json = json.load(archivo)
    
    # Convertir el JSON en un DataFrame
    df = pd.DataFrame(casas_json['casas'])
    
    # Eliminar el carácter '=' de todas las columnas
    df = df.applymap(lambda x: x.replace('=', '') if isinstance(x, str) else x)

    # Convertir columnas específicas a numéricas
    columns_to_convert = [
        'LotFrontage', 'LotArea', 'OverallQual', 'OverallCond', 'YearBuilt',
        'YearRemodAdd', 'MasVnrArea', 'BsmtFinSF1', 'BsmtFinSF2', 'BsmtUnfSF', 
        'TotalBsmtSF', 'FirstFlrSF', 'SecondFlrSF', 'LowQualFinSF', 'GrLivArea', 
        'BsmtFullBath', 'BsmtHalfBath', 'FullBath', 'HalfBath', 'BedroomAbvGr', 
        'KitchenAbvGr', 'TotRmsAbvGrd', 'Fireplaces', 'GarageYrBlt', 'GarageCars', 
        'GarageArea', 'WoodDeckSF', 'OpenPorchSF', 'EnclosedPorch', 'ThreeSsnPorch', 
        'ScreenPorch', 'PoolArea', 'MiscVal', 'MoSold', 'YrSold', 'SalePrice'
    ]

    for col in columns_to_convert:
        df[col] = pd.to_numeric(df[col], errors='coerce')

    # Luego puedes continuar con el resto del procesamiento y predicción como lo tenías:
    X = df.drop(['SalePrice', 'id'], axis=1)
    
    # Calcula la media de las columnas específicas y rellena los valores faltantes en X
    medias = df[['YearBuilt', 'YearRemodAdd', 'GarageYrBlt', 'YrSold']].mean()
    X[['YearBuilt', 'YearRemodAdd', 'GarageYrBlt', 'YrSold']] = X[['YearBuilt', 'YearRemodAdd', 'GarageYrBlt', 'YrSold']].fillna(medias)
    X.fillna(0, inplace=True)
    
    predicciones = modelo.predict(X)
    
    df.at[df.index[-1], 'SalePrice'] = predicciones[-1]
    
    return df.tail(1).to_json(orient='records')
