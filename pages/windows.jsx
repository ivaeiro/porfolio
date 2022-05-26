import React from 'react'
import Head from 'next/Head'
import {Navbar, Footer, ContainerMain, Code} from '../components'
import Link from 'next/link'

function windows() {
  return (
    <div>
    <Navbar/>
    <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
            <img className="w-1/3" src="https://imgur.com/FperofC.jpg" alt="PowerShell">
            </img>
            <h1 className="text-2xl font-bold">PowerShell</h1>
            <Link href="/PS" passHref>
            <button className="p-4 border-2 border-black rounded-full">Ir a PowerShell</button>
            </Link>
            
          </div>
      </div>
      <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
            <img className="w-1/3" src="https://imgur.com/MlKdGZH.png" alt="CMD">
            </img>
            <h1 className="text-2xl font-bold">CMD</h1>
            <Link href="/cmd" passHref>
            <button className="p-4 border-2 border-black rounded-full">Ir a CMD</button>
            </Link>
          </div>
      </div>
      <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
            <img className="w-1/3" src="https://imgur.com/d9lwhl3.png" alt="Git">
            </img>
            <h1 className="text-2xl font-bold">Git</h1>
            <Link href="/git" passHref>
            <button className="p-4 border-2 border-black rounded-full">Ir a Git</button>
            </Link>
          </div>
      </div>
      <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex gap-2 justify-center items-center flex-col">
            <img className="w-1/3" src="https://imgur.com/D1S4Dtc.jpg" alt="Quitar contraseña de windows">
            </img>
            <h1 className="text-2xl font-bold">Quitar contraseña de windows</h1>
            <Link href="/quitarPassword" passHref>
            <button className="p-4 border-2 border-black rounded-full">Ir a quitar contraseña de windows</button>
            </Link>
          </div>
      </div>
    <Footer/>
    </div>
  )
}

export default windows