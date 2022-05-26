import React from 'react'
import Head from 'next/head'
import {Navbar, Footer, ContainerMain} from '../components'

function inicio() {
  return (
    <div>
      <Head>
       <title>El rincón de la informática</title>
      </Head>
      <Navbar/>
      <ContainerMain/>
      <Footer/>
    </div>
  )
}

export default inicio