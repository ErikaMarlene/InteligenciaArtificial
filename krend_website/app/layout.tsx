import { Footer, Hero, Navbar } from "@/components";
import "./globals.css";
import Head from "next/head";
import Home from './page';
import App from ".";

export const metadata = {
  title: "KREND",
  description: "Descubre tu casa ideal.",
};

export default function RootLayout({
  children, 
  mostrarCompra,
  mostrarOcultarHome,
}: {
  children: React.ReactNode;
  mostrarCompra: boolean,
  mostrarOcultarHome: () => void;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Agrega los enlaces al favicon aquí */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="relative">
        <Navbar />
          {mostrarCompra ? <Home /> : <Hero mostrarOcultarHome={mostrarOcultarHome}/>}
        {children}
        <Footer />
      </body>
    </html>
  );
}
