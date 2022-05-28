import React from "react";
import { Navbar, Footer, ContainerMain, Code } from "../components";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

function conexionRemotaWL() {
  return (
    <>
      <Navbar />
      <Head>
    <title>El rincón de la informática</title>
    </Head>
      <ContainerMain>
        <h1 className="text-2xl font-bold">
          Escritorio remoto en Ubunutu 20.04 con xRDP
        </h1>
        <p>
          Partiremos de un ordenador con Ubuntu 20.04 LTS instalado. En él
          abriremos una nueva ventana de terminal
        </p>
        <p>A continuación, instalaremos xRDP usando el siguiente comando:</p>
        <Code>sudo apt-get install xrdp -y</Code>
        <p>
          Añadimos el argumento -y para contestar automáticamente de manera
          afirmativa a cualquier pregunta que se nos haga durante la
          instalación.
        </p>
        <p>
          Cuando se haya completado la instalación, el servicio xrdp se habrá
          iniciado automáticamente. Aún así, podemos comprobarlo fácilmente con
          el siguiente comando:
        </p>
        <Code>sudo systemctl status xrdp</Code>
        <Image
        className="w-1/3"
        src="https://imgur.com/iDy4yNU.png"
        alt="systemctl status xrdp"
        width={200}
        height={200}
        ></Image>
        <p>
          Cuando instalamos xrdp, se crea también en el sistema una nueva cuenta
          de usuario llamada, precisamente, xrdp. Ademas, se crea un certificado
          SSL, en el archivo ssl-cert-snakeoil.key, dentro de la carpeta
          /etc/ssl/private/.
        </p>
        <p>
          A continuación, nosotros deberemos añadir el usuario xrdp al grupo
          ssl-cert para lograr que el usuario pueda leer el certificado. Lo
          haremos con la siguiente orden:
        </p>
        <Code>sudo adduser xrdp ssl-cert</Code>
        <Image
        className="w-1/3"
        src="https://imgur.com/FCq5UPg.png"
        alt="añadimos el usuario"
        width={200}
        height={200}
        ></Image>
        <p>
          Llegados a este punto, podríamos pensar que hemos terminado. Sin
          embargo, es frecuente que al usar el escritorio remoto desde otro
          equipo, en lugar del escritorio de Ubuntu, encontremos una pantalla en
          negro.
        </p>
        <p>
          Para resolverlo, basta con editar el archivo /etc/xrdp/startwm.sh y
          eliminar el valor de las variables DBUS_SESSION_BUS_ADDRESS y
          XDG_RUNTIME_DIR. Lo primero será editar el archivo:
        </p>
        <Code>sudo nano /etc/xrdp/startwm.sh</Code>
        <p>
          Cuando tenemos el contenido del archivo en pantalla, nos desplazamos
          hasta el final.
        </p>
        <p>Ahí insertamos las siguientes líneas:</p>
        <Code>unset DBUS_SESSION_BUS_ADDRESS</Code>
        <Code>unset XDG_RUNTIME_DIR</Code>
        <p>Al hacerlo, el editor nos preguntará si queremos guardar los cambios que hemos realizado.</p>
        <Image
        className="w-1/3"
        src="https://imgur.com/j83mfnP.png"
        alt="modificamos el archivo startwm.sh"
        width={200}
        height={200}
        ></Image>
        <p>A continuación, nos da la oportunidad de cambiar el nombre del archivo, para no perder su valor anterior.</p>
        <h1 className="text-2xl font-bold">Comprobamos que funciona</h1>
        
      </ContainerMain>
      <Footer />
    </>
  );
}

export default conexionRemotaWL;
