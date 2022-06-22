import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import {Navbar, Footer, ContainerMain, FlipCard} from '../components'


export default function Home() {
  return (
    <>
     <Head>
       <title>El rincón de la informática</title>
     </Head>
     <Navbar/>
      <ContainerMain>
        <FlipCard></FlipCard>
       </ContainerMain>
      <Footer/>
      <Footer/>
    </>

  )
}