import React from 'react'
import Image from "next/image";

function FlipCard() {
  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
        <Image className="flip-card-front"
        src="https://imgur.com/UQ3lj8z.png"
        alt="Avatar"
        width={200}
        height={250}
        ></Image>
    </div>
    <div className="flip-card-back">
      <div className="flip-card-text">
      <p>Iván Peiró</p>
      <p>Técnico en Sistemas Microinformáticos y Redes</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default FlipCard