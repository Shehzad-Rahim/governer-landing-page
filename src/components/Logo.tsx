import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
function Logo() {
  return (
    <div className='absolute lg:left-16 md:left-6 left-3'>
      <Image className='md:w-[90px] sm:w-[80px] w-[70px]' src={logo} alt='logo' />
    </div>
  )
}

export default Logo
