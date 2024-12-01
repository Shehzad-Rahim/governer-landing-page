import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  
  SheetTrigger,
} from "@/components/ui/sheet"


function Header() {
  return (
    <header className='flex fixed w-full top-0 z-30 bg-[#044e83] sm:py-6 py-4 justify-evenly text-white'>
        <div id="log">
            <Logo />
        </div>
    
      <div id="title" className=' xl:text-xl lg:block hidden font-bold opacity-[80%] tracking-tighter'>
      Tuition Free Education Program on Latest Technologies
      </div>
      <div id="title" className='lg:hidden block md:text-xl text-lg font-bold opacity-[80%] tracking-tighter'>
      Tuition Free Program
      </div>
      <div>

      
      <ul className='sm:flex hidden gap-6 ml-5 text-md'>
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
        <li className='flex items-center gap-2'>
            <Link href={'/'}>Courses </Link><IoIosArrowDown className='text-sm'/>
        </li>
      </ul>
      
      <Sheet>
  <SheetTrigger>
    <IoMenu className='sm:hidden block text-3xl absolute right-3 top-4 cursor-pointer' />
  </SheetTrigger>
  <SheetContent className='bg-[#044e83]'>
  <ul className='flex flex-col text-md font-semibold text-white mt-14'>
        <li className='border-b py-5'>
            <Link href={'/'}>Home</Link>
        </li>
        <li className='border-b py-5'>
            <Link href={'/'}>Apply</Link>
        </li>
        <li className='border-b py-5'>
            <Link href={'/'}>Job</Link>
        </li>
        <li className='border-b py-5'>
            <Link href={'/'}>Result</Link>
        </li>
        <li className='flex items-center justify-between border-b py-5'>
            <Link href={'/'}>Courses </Link><IoIosArrowDown className='text-sm'/>
        </li>
      </ul>
  </SheetContent>
</Sheet>

      </div>
    
    </header>
  )
}

export default Header
