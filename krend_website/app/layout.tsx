import { Footer, Hero, Navbar } from "@/components";
import "./globals.css";
import Head from "next/head";
import Home from './Comprar/page';

export const metadata = {
  title: "KREND",
  description: "Descubre tu casa ideal.",
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
