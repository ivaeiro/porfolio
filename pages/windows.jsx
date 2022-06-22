import React from "react";
import Head from "next/head";
import { Navbar, Footer, ContainerMain, Code } from "../components";
import Link from "next/link";
import Image from "next/image";

const apartado = [

  {
      image:"https://imgur.com/3tE3UKv.jpg",
      name:"PowerShell",
      url:"/PS"
  },
  {
      image:"https://imgur.com/AU2I3AR.jpg",
      name:"CMD",
      url:"/cmd"
  },
  {
      image:"https://imgur.com/hoC9s3O.png",
      name:"Git",
      url:"/git"
  },
  // {
  //     image:"https://imgur.com/D1S4Dtc.jpg",
  //     name:"Quitar contraseña de windows",
  //     url:"/quitarPassword"
  // },
]

function windows() {
  
  return (
    <div>
      <Navbar />
      <Head>
        <title>El rincón de la informática</title>
      </Head>

      <div className="p-4">
        <div className="grid grid-cols-2 justify-center items-center">
          
          {apartado.map((item, i)=>(
            <div className="text-center" key={i}>
            <Image
              className="w-1/3"
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
            ></Image>
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <Link href={item.url} passHref>
              <button className="p-4 border-2 border-black rounded-full">
                Ir a {item.name}
              </button>
            </Link>
          </div>
          ))}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default windows;
