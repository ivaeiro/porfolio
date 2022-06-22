import React from 'react'
import {Navbar, Footer, ContainerMain, Code} from '../components'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const apartado = [

  {
      image:"https://imgur.com/yAiKCXJ.jpg",
      name:"Graylog",
      url:"/graylog"
  },
  {
      image:"https://imgur.com/Um1Tnce.jpg",
      name:"Conexion remota Windows Ubuntu",
      url:"/conexionRemotaWL"
  },
]

function linux() {
  return (
    <div>
      <Navbar/>
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
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <Link href={item.url} passHref>
              <button className="p-4 border-2 border-black rounded-full">
                Ir a {item.name}
              </button>
            </Link>
          </div>
          ))}
          
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default linux