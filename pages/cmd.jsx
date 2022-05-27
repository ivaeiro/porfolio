import React from "react";
import { Navbar, Footer, ContainerMain, Code } from "../components";
import Link from "next/link";
import Head from "next/head";

function cmd() {
  return (
    <>
      <Navbar />
      <Head>
    <title>El rincón de la informática</title>
    </Head>
      <main className="block">
        <ContainerMain>
          <h1 className="text-3xl text-center font-bold p-2">
            Comandos interesantes CMD
          </h1>
          <h6 className="text-base text-center font-bold p-2">
            ¿Qué es el CMD?
          </h6>
          <p>
            El símbolo del sistema es el intérprete de comandos en OS/2 y
            sistemas basados en Windows NT (incluyendo Windows 2000, Windows XP,
            Windows Server 2003, Windows Vista, Windows 7, Windows 8, Windows
            8.1, Windows 10 y Windows 11).
          </p>
          <h5 className="text-base text-left font-bold p-2">
            Aquí se añadirán todos los comandos de CMD que sean importantes o de
            uso frecuente
          </h5>
          <p>
            1- Muestra la información sobre la tarjeta de red. Para ver los
            parametros que le puedes añadir al comando, /?.
          </p>
          <Code>ipconfig</Code>
          <p>2- </p>
        </ContainerMain>
      </main>
      <Footer />
    </>
  );
}

export default cmd;
