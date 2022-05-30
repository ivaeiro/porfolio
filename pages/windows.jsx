import React from "react";
import Head from "next/head";
import { Navbar, Footer, ContainerMain, Code } from "../components";
import Link from "next/link";
import Image from "next/image";

function windows() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>El rincón de la informática</title>
      </Head>
      

      <div className="p-4">
        <div className="grid grid-row justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
          <div className="grid grid-cols-2">
              <div className="text-center">
                <Image
                  className="w-1/3"
                  src="https://imgur.com/FperofC.jpg"
                  alt="PowerShell"
                  width={350}
                  height={150}
                ></Image>
                <h1 className="text-2xl font-bold">PowerShell</h1>
                <Link href="/PS" passHref>
                  <button className="p-4 border-2 border-black rounded-full">
                    Ir a PowerShell
                  </button>
                </Link>
              </div>
              <div>
                <Image
                  className="w-1/3"
                  src="https://imgur.com/MlKdGZH.jpg"
                  alt="CMD"
                  width={200}
                  height={200}
                ></Image>
                <h1 className="text-2xl font-bold">
                  Ir a CMD
                </h1>
                <Link href="/cmd" passHref>
                  <button className="p-4 border-2 border-black rounded-full">
                    Ir a CMD
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-center">
                <Image
                  className="w-1/3"
                  src="https://imgur.com/d9lwhl3.png"
                  alt="Git"
                  width={250}
                  height={250}
                ></Image>
                <h1 className="text-2xl font-bold">Git</h1>
                <Link href="/git" passHref>
                  <button className="p-4 border-2 border-black rounded-full">
                    Ir a Git
                  </button>
                </Link>
              </div>
              <div>
                <Image
                  className="w-1/3"
                  src="https://imgur.com/D1S4Dtc.jpg"
                  alt="Quitar contraseña de windows"
                  width={250}
                  height={250}
                ></Image>
                <h1 className="text-2xl font-bold">
                  Quitar contraseña de windows
                </h1>
                <Link href="/quitarPassword" passHref>
                  <button className="p-4 border-2 border-black rounded-full">
                    Ir a quitar contraseña de windows
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default windows;
