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
          <h2 className="text-3xl text-center font-bold p-2">
            Comandos interesantes CMD
          </h2>
          <h2 className="text-base text-center font-bold p-2">
            ¿Qué es el CMD?
          </h2>
          <p>
            El símbolo del sistema es el intérprete de comandos en OS/2 y
            sistemas basados en Windows NT (incluyendo Windows 2000, Windows XP,
            Windows Server 2003, Windows Vista, Windows 7, Windows 8, Windows
            8.1, Windows 10 y Windows 11).
          </p>
          <h3 className="text-base text-left font-bold p-2">
            Aquí se añadirán todos los comandos de CMD que sean importantes o de
            uso frecuente
          </h3>
          <p>
            1- Muestra la información sobre la tarjeta de red. Para ver los
            parametros que le puedes añadir al comando, /?.
          </p>
          <Code>ipconfig</Code>
          <p>
            2- El siguiente comando sirve para obtener la información sobre el
            ordenador o sistema en el que estás trabajando. Te da datos como el
            nombre del sistema, el procesador, la memoria RAM, la placa base o
            el almacenamiento interno que tienes.
          </p>
          <Code>systeminfo</Code>
          <p>
            3- Sirve para realizar un análisis de la superficie del disco duro
            para detectar fallos como posibles sectores defectuosos, y también
            hace comprobaciones en la estructura lógica del sistema de archivos
            y repara cualquier error (archivos perdidos, nombres sin sentido,
            carpetas a las que no se puede acceder, etc.).
          </p>
          <Code>CHKDSK</Code>
          <p>
            4- Analiza y muestra las estadísticas del protocolo y las conexiones
            TCP/IP en uso por tus dispositivos. Con ello, puedes solucionar
            posibles problemas de conexión mirando el estado de los puertos y
            conexiones de tu equipo.
          </p>
          <Code>NETSTAT</Code>
          <p>
            5- Te ayuda a saber el camino que sigue tu conexión hasta llegar al
            host que le indiques. Por ejemplo, TRACERT www.youtube.com
          </p>
          <Code>TRACERT DIRECCIONHOST</Code>
          <p>
            6- Te muestra la lista completa de todos los drivers que tienes
            instalados en el ordenador, con su nombre de módulo, nombre completo
            y el tipo de controlador del que se trata.
          </p>
          <Code>DRIVERQUERY</Code>
          <p>
            7- En la lista anterior, a cada proceso se le asigna un PID o Número
            identificador del proceso. Pues bien, con este comando podrás cerrar
            el proceso cuyo número le hayas indicado.
          </p>
          <Code>TASKKILL /PID NUMEROIDDEPROCESO</Code>
          <p>
            8- Sirve para apagar el ordenador directamente desde la consola de
            comandos de Windows. Puedes añadirle el atributo -s -t
            TiempoEnSegundos para programar el apagado, o escribir simplemente
            SHUTDOWN -R para reiniciar el ordenador.
          </p>
          <Code>SHUTDOWN</Code>
          <p>
            9- Escribe este comando añadiéndole los atributos LIST DISK o LIST
            VOLUME para obtener un listado de los discos o volúmenes del equipo
            con esta función para gestionar las particiones y discos duros.
          </p>
          <Code>DISKPART</Code>
          <p>
            10- La consola de Windows ejecuta un benchmark completo que analiza
            el rendimiento del equipo y todos sus componentes. Este comando, el
            WINSAT, también puede ser acompañado de otros apellidos más allá de
            FORMAL, como por ejemplo CPUFORMAL para medir sólo el rendimiento de
            la CPU, MEMFORMAL para el de la RAM, GRAPHICSFORMAL para la tarjeta
            gráfica o DISKFORMAL para las unidades de almacenamiento.
          </p>
          <Code>WINSAT FORMAL</Code>
        </ContainerMain>
      </main>
      <Footer />
    </>
  );
}

export default cmd;
