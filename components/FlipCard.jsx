import React from 'react'
import Image from "next/image";

function FlipCard() {
  return (
    <>
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
        <Image
        src="#"
        alt="Avatar"
        width={150}
        height={150}
        ></Image>
    </div>
    <div className="flip-card-back">
      <h1>Iván Peiró</h1>
      <p>Técnico en Sistemas Microinformáticos y Redes</p>
    </div>
  </div>
</div>
    </>
  )
}

export default FlipCard