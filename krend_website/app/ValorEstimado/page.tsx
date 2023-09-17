"use client";
import { useEffect, useState } from "react";

function ValorEstimado() {
  const [responseData, setResponseData] = useState<{
    SalePrice: number;
  } | null>(null);

  useEffect(() => {
    // Recuperar responseData de localStorage
    const responseDataFromLocalStorage = localStorage.getItem("responseData");
    if (responseDataFromLocalStorage) {
      const parsedResponseData = JSON.parse(responseDataFromLocalStorage);
      setResponseData(parsedResponseData);
    } else {
      console.error("responseData no está en localStorage");
    }
  }, []);

  return (
    <div className="valor-estimado-container">
      <div className="content-container">
        <div className="text-container">
          <h1 className="results-heading">Resultados</h1>
          {responseData ? (
            <p className="sale-condition">
              <span className="result-text">
                Tomando en cuenta todas las características de tu propiedad, tu
                casa tiene un valor estimado de:
              </span>{" "}
              <span className="price-condition">
                ${responseData.SalePrice}
                usd
              </span>
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
        {/* Agrega el console.log aquí */}
        {responseData && (
          <script>{`console.log(${responseData.SalePrice});`}</script>
        )}
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
