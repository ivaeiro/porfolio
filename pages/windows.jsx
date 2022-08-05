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
  {
    image:"https://imgur.com/D1S4Dtc.jpg",
    name:"Quitar contraseña de windows",
    url:"/quitarPassword"
},
{
  image:"https://imgur.com/pqyuDZz.jpg",
  name:"Problemas en Windows Search",
  url:"/lupa"
},
]

function windows() {
  
  return (
    <div>
      <Navbar/>
      <Head>
        <title>El rincón de la informática</title>
      </Head>
       <div className="flex justify-center p-4 "> {/*se usa flex para centrarlo */}
         <div className="grid grid-cols-3 items-center"> {/*se usa grid para definir la posicion de las celdas */}
          {apartado.map((item, i)=>(
            <div className="text-center pb-4" key={i}>
            <Image
              className="w-1/3"
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
            ></Image>
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <Link href={item.url} passHref>
              <button className="style-button p-4">
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
