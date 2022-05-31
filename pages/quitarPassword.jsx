import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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
            ¿Como quitar la contraseña del windows con {"Hiren's"} Boot?
          </h1>
          <p>
            Pasos a seguir para restablecer la contraseña de un usuario usando
            una ISO de {"Hiren's"} Boot.
          </p>
          <p>
            Para descargar la ISO de {"Hiren's"} Boot, la descargaremos desde la {"página"} oficial que es,
            <a href="https://www.hirensbootcd.org/">{"Hiren's"} Boot</a>
          </p>
          <p>
            Lo primero que tendremos que hacer es crear un USB de arranque de
            {"Hiren's"} Boot con Rufus.
          </p>
          <Image
            src="https://imgur.com/aB8w7nB.png"
            alt="Rufus"
            width={500}
            height={500}
          ></Image>
          <p>
            El siguiente paso que deberemos realizar es reiniciar el ordenador y
            bootear desde el USB. Tiene una apariencia muy similar a Windows 10.
            Hay una carpeta que se llama Utilities. Dentro hay otra carpeta que
            se llama Security y dentro una carpeta llamada Passwords.
          </p>
          <p>
            Ejecutamos la utulidad NT Password Edit y será desplegado lo
            siguiente:
          </p>
          <Image
            src="https://imgur.com/ZQFrSVT.png"
            width={400}
            height={400}
            alt="Elegimos el usuario"
          ></Image>
          <p>
            En la ruta superior se encuentran alojados los nombres de usuarios
            registrados en Windows 10, damos clic sobre el botón “Open” para
            listar estos usuarios:
          </p>
          <Image
            src="#"
            alt="falta poner foto"
            width={400}
            height={400}
          ></Image>
          <p>
            Seleccionamos el usuario afectado, damos clic en “Change Password” y
            luego establecemos y confirmamos la nueva contraseña a usar:
          </p>
          <Image src="#" alt="falta poner foto" width={0} height={0}></Image>
        </ContainerMain>
      </main>
      <Footer />
    </div>
  );
}

export default quitarPassword;
