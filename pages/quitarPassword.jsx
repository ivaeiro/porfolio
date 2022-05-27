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
          <p>
            Pasos a seguir para restablecer la contraseña de un usuario usando
            una ISO de Hiren's Boot.
          </p>
          <p>Para descargar la ISO de Hirens Boot, la descargaremos desde la página oficial que es, <a href="https://www.hirensbootcd.org/">hiren's Boot</a></p>
        </ContainerMain>
      </main>
      <Footer />
    </div>
  );
}

export default quitarPassword;
