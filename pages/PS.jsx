import React from "react";
import { Navbar, Footer, ContainerMain, Code } from "../components";

function PS() {
  return (
    <div>
      <Navbar />
      <main className="block">
        <ContainerMain>
          <h1 className="text-3xl text-center font-bold p-2">
            Comandos interesantes PoweShell
          </h1>
          <h6 className="text-base text-center font-bold p-2">
            ¿Qué es la PoweShell?
          </h6>
          <p>
            La PoweShell es es una interfaz de consola con posibilidad de
            escritura y unión de comandos por medio de instrucciones. Esta
            interfaz de consola está diseñada para su uso por parte de
            administradores de sistemas con el propósito de automatizar tareas o
            realizarlas de forma más controlada.
          </p>
          <h5 className="text-base text-left font-bold p-2">
            Aquí se añadirán todos los comandos de PowerShell que sean
            importantes o de uso frecuente
          </h5>

          <p>1- Comando para comprobar si SMBv1 esta activo.</p>
          <Code>
            Get-WindowsOptionalFeature –Online –FeatureName SMB1Protocol
          </Code>
          <p>2- Habilitar Protocolo SMBv1 mediante comandos.</p>
          <Code>
            Enable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol
          </Code>
          <p>3- Para deshabilitar Protocolo SMBv1 mediante comandos.</p>
          <Code>
            Disable-WindowsOptionalFeature -Online -FeatureName SMB1Protocol
          </Code>
          <p>
            4- El siguiente comando te saca en un archivo el contenido que hay
            en la ruta que le indiques y el contenido de ellas.
          </p>
          <p>
            El comando Get-ChildItem muestra información sirve para obtener
            información sobre todos los elementos dentro de una carpeta, se una
            el parámetro Path para especificar el directorio, en nuestro caso,
            C:\ .
          </p>
          <p>
            El parámetro Recurse busca en el directo Path sus subdirectorios,
            como muestra en los encabezados Directory.
          </p>
          <Code>
            Get-ChildItem -Path C:\ -Recurse | Select-Object -Property FullName
            | Out-File -FilePath C:\Users\(Nombre de usuario)\Desktop\prueba
          </Code>

          <p>5- Comando para listar todos los volúmenes del sistema</p>
          <Code>Get-Volume</Code>

          <p>
            6- Comando para instalar el módulo PSWindowsUpdate, este módulo
            permite instalar o descargar actualizaciones de Windows mediante
            comandos PowerShell.
          </p>
          <Code>Install-Module -Name PSWindowsUpdate</Code>

          <p>
            7- Comando para instalar TODAS las actualizaciones disponibles. El
            último parámetro indica que no se reinicie automáticamente el PC
            cuando acaben de instalarse las actualizaciones. Este último
            parámetro se puede sustituir por -ForceReboot para que se reinicie
            automáticamente el PC.
          </p>
          <Code>
            Install-WindowsUpdate -MicrosoftUpdate -AcceptAll -IgnoreReboot
          </Code>

          <p>
            8- Comando que habilita el poder lanzar scripts de terceros mediante
            PowerShell.
          </p>
          <Code>Set-ExecutionPolicy Unrestricted</Code>
          <p>9- Este comando permite limpiar la cache DNS del equipo.</p>
          <Code>Clear-DnsClientCache</Code>
        </ContainerMain>
      </main>

      <Footer />
    </div>
  );
}

export default PS;
