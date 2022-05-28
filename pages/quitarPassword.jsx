import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Navbar, Footer, ContainerMain, Code } from "../components";

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
            una ISO de {"Hiren's"} Boot.
          </p>
          <p>Para descargar la ISO de {"Hiren's"} Boot, la descargaremos desde la {"página"} oficial que es, <a href="https://www.hirensbootcd.org/">{"Hiren's"} Boot</a></p>
        </ContainerMain>
      </main>
      <Footer />
    </div>
  );
}

export default quitarPassword;
