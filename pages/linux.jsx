import React from 'react'
import {Navbar, Footer, ContainerMain, Code} from '../components'
import Link from 'next/link'

function linux() {
  return (
    <div>
      <Navbar/>
      <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">Monitorizar clientes con Graylog para Ubuntu 20.04</h1>
            <img className="w-1/3" src="https://imgur.com/kgua13L.jpg" alt="Graylog">
            </img>
            <Link href="/graylog" passHref>
            <button className="p-4 border-2 border-black rounded-full">Ir a Graylog</button>
            </Link>
          </div>
          
      </div>
      <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">Conexion remota Windows Ubuntu</h1>
            <img className="w-1/3" src="#" alt="Conexion remota Windows - Linux">
            </img>
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