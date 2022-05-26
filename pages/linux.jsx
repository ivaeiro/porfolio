import React from 'react'
import {Navbar, Footer, ContainerMain, Code} from '../components'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

function linux() {
  return (
    <div>
      <Navbar/>
      <Head>
    <title>El rincón de la informática</title>
    </Head>
      <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">Monitorizar clientes con Graylog para Ubuntu 20.04</h1>
            <Image className="w-1/3" src="https://imgur.com/kgua13L.jpg" alt="Graylog" width={300} height={200}>
            </Image>
            <Link href="/graylog" passHref>
            <button className="p-4 border-2 border-black rounded-full">Ir a Graylog</button>
            </Link>
          </div>
          
      </div>
      <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">Conexion remota Windows Ubuntu</h1>
            <Image className="w-1/3" src="https://imgur.com/Um1Tnce.jpg" alt="Conexion remota Windows - Linux" width={200} height={200}>
            </Image>
            <Link href="/conexionRemotaWL" passHref>
            <button className="p-4 border-2 border-black rounded-full">Ir a conexion remota Windows - Linux</button>
            </Link>
          </div>
          
      </div>
      <Footer/>
      </div>
  )
}

export default linux