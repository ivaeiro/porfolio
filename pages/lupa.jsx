import React from "react";
import { Navbar, Footer, ContainerMain, Code } from "../components";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function lupa() {
  return (
    <>
      <Navbar />
      <Head>
        <title>El rincón de la informática</title>
      </Head>
      <main className="block">
        <ContainerMain>
          <h2 className="text-3xl text-center font-bold p-2">
            Problemas con el buscador de Windows Search
          </h2>
          <p className="text-base text-center font-bold p-2">Ejecutar el proceso ctfmon.exe</p>
          <p>
            Este proceso es el encargado de controlar, entre otras cosas, el
            reconocimiento de voz de Windows, así como el reconocimiento de
            escritura y otros servicios de escritura a mano. Si este proceso
            está cerrado, esta puede ser la razón por la que no podemos escribir
            en el buscador. Debemos ejecutarlo desde la ventana de ejecutar que
            aparece al pulsar Windows + R, y debería volver a funcionar con
            normalidad.
          </p>
          <p className="p-1">
            Debemos tener presente que son muchas las funciones integradas del
            propio Windows 10 que afectan e influyen, de un modo u otro, en el
            buscador. Por tanto, si se da un fallo en alguna de estas, eso
            podría repercutir en el sistema de búsqueda, como comprobaremos.
          </p>
        </ContainerMain>
      </main>
      <Footer />
    </>
  );
}

export default lupa;
