import React from "react";
import { Navbar, Footer, ContainerMain, Code } from "../components";
import Link from "next/link";

function quitarPassword() {
  return (
    <div>
      <Navbar />
      <main className="block">
        <ContainerMain>
          <h1 className="text-3xl text-center font-bold p-2">
            ¿Como quitar la contraseña del windows?
          </h1>
          <p>
            Pasos a seguir para restablecer la contraseña de un usuario usando
            una ISO de Windows.
          </p>
          <p>
            1- Para ello debemos contar con la imagen ISO de Windows 10 en un DVD o
            USB de arranque. La conectamos al equipo y al encenderlo pulsamos
            alguna tecla para iniciar el asistente de instalación de Windows 10:
          </p>
          <img src="https://imgur.com/q6QYOVl.png"/>
          <p>2- Elegiremos la opción de "Reparar el equipo"</p>
          <img src="https://imgur.com/a31nnGp.png"/>
        </ContainerMain>
      </main>
      <Footer />
    </div>
  );
}

export default quitarPassword;
