import React from "react";
// const ReactDOM = require("react-dom");
import { Navbar, Footer, ContainerMain, FlipCard } from "../components";
import Head from "next/head";

function About() {
  // this.animation = React.createRef();
  // this.callanimation = this.callAnimation.bind(this);

  // const callAnimation = () => {
  //   console.log("hola");
  // };

  return (
    <div>
      <Navbar />
      <Head>
        <title>El rincón de la informática</title>
      </Head>
      <ContainerMain>
        <FlipCard></FlipCard>
        <div>
        {/* <div className="" ref={this.animation}>
          <input
            type="button"
            value="Focus the text input"
            onClick={this.callanimation}
          /> */}
          <p>
            Buenas, me llamo Iván Peiró Palacio, soy de Valencia, España y tengo
            22 años.
          </p>
          <p>
            Desde que era niño siempre he tenido un ordenador en casa y siempre
            he querido ser programador.
          </p>
          <p>
            Mas tarde decidí hacer programación y estudie el Ciclo Formativo de
            Grado Medio de SMR (Sistemas Microínformaticos y Redes), ahora
            mismo, soy Técnico en Sistemas Microínformaticos y Redes para
            después hacer Ciclo Formativo de Grado Superior DAM (Desarrollo de
            Aplicaciones Multiplataforma).
          </p>
          <p>
            Si necesitas cualquier tipo de reparaciones, formateo e instalación
            de distintos tipos de sistema operativos no dudes en contactar
            conmigo, estare encantado de ayudarte, este es mi correo
            palaciopeiroivan@gmail.com.
          </p>
        </div>
      </ContainerMain>
      <Footer />
    </div>
  );
}

export default About;
