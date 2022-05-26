import React from "react";
import { Navbar, Footer, ContainerMain } from "../components";

function About() {
  return (
    <div>
      <Navbar />
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
          Más tarde decidí decidí hacer programación y estudie el Ciclo
          Formativo de Grado Medio de SMR (Sistemas Microínformaticos y Redes),
          ahora mismo, soy Tecnico en Sistemas Microínformaticos y Redes para
          después hacer Ciclo Formativo de Grado Superior DAM(Desarrollo de
          Aplicaciones Multiplataforma).
        </p>
        <p>
          Si necesitas cualquier tipo de reparaciones, formateo e instalación de
          distintos tipos de sistema operativos no dudes en contactar conmigo
          estare encantado de ayudarte palaciopeiroivan@gmail.com.
        </p>
      </ContainerMain>
      <Footer />
    </div>
  );
}

export default About;
