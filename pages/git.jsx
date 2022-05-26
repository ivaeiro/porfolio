import React from "react";
import { Navbar, Footer, ContainerMain, Code } from "../components";
import Link from "next/link";

function git() {
  return (
    <>
      <Navbar />
      <main className="block">
        <ContainerMain>
          <h1 className="text-3xl text-center font-bold p-2">¿Que es Git?</h1>
          <p>
            Git es un software de control de versiones diseñado por Linus
            Torvalds, pensando en la eficiencia, la confiabilidad y
            compatibilidad del mantenimiento de versiones de aplicaciones cuando
            estas tienen un gran número de archivos de código fuente.
          </p>
          <p>
            1- El comando git init creará un nuevo repositorio local de GIT. El
            siguiente comando de Git creará un repositorio en el directorio
            actual:
          </p>
          <Code>git init</Code>
          <p>2- El comando git clone se usa para copiar un repositorio. Si el repositorio está en un servidor remoto, se usa:</p>
          <Code>git clone nombredeusuario@host:/path/to/repository</Code>
          <p>3- El comando gid add se usa para agregar archivos al área de preparación. Por ejemplo, el siguiente comando de Git básico indexará el archivo temp.txt:</p>
          <Code>git add {'<temp.txt>'}</Code>
          <p>4- El comando git commit creará una instantánea de los cambios y la guardará en el directorio git.</p>
          <Code>git commit –m “El mensaje que acompaña al commit va aquí”</Code>
          <p>5- El comando git status muestra la lista de los archivos que se han cambiado junto con los archivos que están por ser preparados o confirmados.</p>
          <Code>git status</Code>
          <p>6- El comando git push se usa para enviar confirmaciones locales a la rama maestra del repositorio remoto. Aquí está la estructura básica del código:</p>
          <Code>git push  origin {'<master>'}</Code>
          <p>7- El comando git checkout crea ramas y te ayuda a navegar entre ellas. Por ejemplo, el siguiente comando crea una nueva y automáticamente se cambia a ella:</p>
          <Code>command git checkout -b {'<branch-name>'}</Code>
          <p>8- Para cambiar de una rama a otra, sólo usa:</p>
          <Code>git checkout {'<branch-name>'}</Code>
          <p>9- El comando git remote te permite ver todos los repositorios remotos. El siguiente comando listará todas las conexiones junto con sus URLs:</p>
          <Code>git remote -v</Code>
          <p>10- El siguiente comando sirve para conectar el repositorio local a un servidor remoto, usa este comando:</p>
          <Code>git remote add origin {'<host-or-remoteURL>'}</Code>
          <p>11- Por otro lado, el siguiente comando borrará una conexión a un repositorio remoto especificado:</p>
          <Code>git remote {'<nombre-del-repositorio>'}</Code>
          <p>12- El comando git branch se usa para listar, crear o borrar ramas. Por ejemplo, si quieres listar todas las ramas presentes en el repositorio, el comando debería verse así:</p>
          <Code>git branch</Code>
        </ContainerMain>
      </main>
      <Footer />
    </>
  );
}

export default git;
