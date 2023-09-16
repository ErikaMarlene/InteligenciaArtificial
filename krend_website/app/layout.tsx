import { Footer, Navbar } from "@/components";
import "./globals.css";
import Head from "next/head";

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
        <link rel="icon" href="../publica/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="../publica/favicon.ico" type="image/x-icon" />
      </Head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
