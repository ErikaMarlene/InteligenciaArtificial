"use client";
import { useEffect, useState } from "react";

function ValorEstimado() {
  const [salePrice, setSalePrice] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar responseData de localStorage
    const responseDataFromLocalStorage = localStorage.getItem("result");

    if (responseDataFromLocalStorage) {
      // Buscar la posición de "SalePrice" en la cadena
      const startIndex = responseDataFromLocalStorage.indexOf("SalePrice");

      if (startIndex !== -1) {
        // Obtener la parte de la cadena después de "SalePrice"
        const salePriceSubstring = responseDataFromLocalStorage.substring(
          startIndex + 2 + "SalePrice".length + 1
        );
        const commaIndex = salePriceSubstring.indexOf(",");
        const salePriceValue =
          commaIndex !== -1
            ? salePriceSubstring.substring(0, commaIndex)
            : salePriceSubstring;
        // Actualizar el estado con el valor encontrado
        setSalePrice(salePriceValue);
      } else {
        console.error("No se encontró 'SalePrice' en la cadena.");
      }
    } else {
      console.error("responseData no está en localStorage");
    }
  }, []);

  return (
    <div className="valor-estimado-container">
      <div className="content-container">
        <div className="text-container">
          <h1 className="results-heading">Resultados</h1>
          {salePrice ? (
            <p className="sale-condition">
              <span className="result-text">
                Tomando en cuenta todas las características de tu propiedad, tu
                casa tiene un valor estimado de:<br></br>
              </span>{" "}
              <span className="price-condition">${salePrice} USD</span>
            </p>
          ) : (
            <p>Esperando datos de respuesta...</p>
          )}
        </div>
        <img
          src="/blue_house.png"
          alt="Imagen Izquierda"
          className="image-left"
        />
      </div>

      <style jsx>{`
        .valor-estimado-container {
          background-image: url('/fondo_general.png'); /* Reemplaza con la ruta de tu imagen de fondo */
          background-size: cover;
          background-repeat: no-repeat;
          /* Aumentar el espacio del contenedor */
          padding: 40px; /* Agrega margen interno alrededor del contenido */
          margin: 20px; /* Agrega margen externo alrededor del contenedor */
          min-height: 100vh; /* Asegura que el contenedor tenga al menos el alto de la ventana */
          display: flex;
          flex-direction: column;
          justify-content: center; /* Centra el contenido verticalmente */
          align-items: center; /* Centra el contenido horizontalmente */
        }

        .content-container {
          display: flex;
          align-items: center; /* Centra verticalmente el contenido */
        }

        .image-left {
          width: 600px; /* Ajusta el tamaño de la imagen */
          height: 400px; /* Ajusta la altura de la imagen */
          margin-left: 20px; /* Espacio entre la imagen y el texto */
        }

        .text-container {
          flex: 1; /* Permite que el texto ocupe el espacio restante */
        }

        .results-heading {
          font-size: 40px; /* Aumenta el tamaño del texto "Resultados" */
          font-weight: bold;
          color: blue;
          text-align: center; 
          
        }

        .sale-condition {
          font-size: 20px; /* Aumenta el tamaño del texto */
          font-weight: normal;
          line-height: 4px
          color: black;
        }

        .price-condition {
          color:blue;
          text-align: right;
          font-weight: bold;
          margin-left: 150px; 
          font-size:30px;

        }
        
      `}</style>
    </div>
  );
}

export default ValorEstimado;
