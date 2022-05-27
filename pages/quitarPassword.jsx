import React from "react";
import { Navbar, Footer, ContainerMain, Code } from "../components";
import Link from "next/link";
import Head from "next/head";

function quitarPassword() {
  return (
    <div>
      <Navbar />
      <Head>
    <title>El rincón de la informática</title>
    </Head>
      <main className="block">
        <ContainerMain>
          <h1 className="text-3xl text-center font-bold p-2">
            ¿Como quitar la contraseña del windows?
          </h1>
          <p>Para descargar la ISO de Hirens Boot, la descargaremos desde la pagina oficial que es <a href="https://www.hirensbootcd.org/">hirens Boot</a></p>
        </ContainerMain>
      </main>
      <Footer />
    </div>
  );
}

export default quitarPassword;
