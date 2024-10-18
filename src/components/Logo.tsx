import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
function Logo() {
  return (
    <div className='absolute left-16'>
      <Image src={logo} alt='logo' width={90} height={90}/>
    </div>
  )
}

export default Logo
