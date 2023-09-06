import React from 'react';
import Image from "next/image";

const Formulario = () => {
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Valua tu casa de forma rápida y sencilla!
        </h1>

        <p className="hero__subtitle">
          Revisa y llena el siguiente formulario para poder tener un valor de tu vivienda.
        </p>
        
        <div className="mt-8">
          <form className="w-full max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input type="text" id="nombre" name="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
              <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
              <textarea id="mensaje" name="mensaje" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
            </div>

            
            <div className="mb-6">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/mansion.jpg" alt="about" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Formulario;
