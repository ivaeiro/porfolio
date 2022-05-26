import React from "react";
import { Navbar, Footer, ContainerMain } from "../components";
import Head from "next/head";

function About() {
  return (
    <div>
      <Navbar />
      <Head>
    <title>El rincón de la informática</title>
    </Head>
      <ContainerMain>
        <p>
          Buenas, me llamo Iván Peiró Palacio, soy de Valencia, España y tengo
          22 años.
        </p>
        <p>
          Desde que era niño siempre he tenido un ordenador en casa y siempre he
          querido ser programador.
        </p>
        <p>
          Más tarde decidí hacer programación y estudie el Ciclo
          Formativo de Grado Medio de SMR (Sistemas Microínformaticos y Redes),
          ahora mismo, soy Técnico en Sistemas Microínformaticos y Redes para
          después hacer Ciclo Formativo de Grado Superior DAM (Desarrollo de
          Aplicaciones Multiplataforma).
        </p>
        <p>
          Si necesitas cualquier tipo de reparaciones, formateo e instalación de
          distintos tipos de sistema operativos no dudes en contactar conmigo,
          estare encantado de ayudarte, este es mi correo palaciopeiroivan@gmail.com.
        </p>
      </ContainerMain>
      <Footer />
    </div>
  );
}

export default About;
