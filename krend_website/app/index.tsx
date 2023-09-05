import React, { useState } from 'react';
import RootLayout from './layout'; 
import Home from './comprar/page';
import Hero from '../components/Hero';

function App() {
    const [mostrarCompra, setMostrarCompra] = useState(false);

  const mostrarOcultarHome = () => {
    setMostrarCompra(!mostrarCompra);
  };

  return (
    <div>
      <button onClick={mostrarOcultarHome}>console.log({mostrarCompra})Mostrar/ocultar Home</button>
      <RootLayout mostrarCompra={mostrarCompra} mostrarOcultarHome={mostrarOcultarHome}>
        <Hero  mostrarOcultarHome={mostrarOcultarHome}/>
        {/* Pasa el estado y la función al componente RootLayout */}
        <Home/>
      </RootLayout>
    </div>
  );
}

export default App;

