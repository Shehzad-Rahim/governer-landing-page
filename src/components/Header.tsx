import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex fixed w-full top-0 z-30 bg-[#044e83] p-[26px] justify-evenly text-white'>
        <div id="log">
            <Logo />
        </div>
    
      <div id="title" className='pl-[135px] text-xl font-bold opacity-[80%] tracking-tighter'>
      Tuition Free Education Program on Latest Technologies
      </div>
      <div>

      
      <ul className='flex gap-4 ml-5 text-md'>
        <li>
            <Link href={'/'}>Home</Link>
        </li>
        <li>
            <Link href={'/'}>Apply</Link>
        </li>
        <li>
            <Link href={'/'}>Job</Link>
        </li>
        <li>
            <Link href={'/'}>Result</Link>
        </li>
        <li>
            <Link href={'/'}>Courses<span className='absolute ml-2 top-[22px]'>&#x2304;</span> </Link>
        </li>
      </ul>
      </div>
    
    </header>
  )
}

export default Header
