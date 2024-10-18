import React from 'react'
import Image from 'next/image'
import cover from '../../images/cover.png'

function Cover() {
    return (
      <Image src={cover} alt='cover' className=" md: ml-40 h-auto min-w-[900px] lg:w-[600px]"/>
    
  )
}

export default Cover
