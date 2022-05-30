import React from 'react'
import Head from 'next/head'
import {Navbar, Footer, ContainerMain, FlipCard} from '../components'

function inicio() {
  return (
    <div>
      <Head>
       <title>El rincón de la informática</title>
      </Head>
      <Navbar/>
      <ContainerMain>
        <FlipCard></FlipCard>
       </ContainerMain>
      <Footer/>
    </div>
  )
}

export default inicio