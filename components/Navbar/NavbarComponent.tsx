import Image from 'next/image'
import React from 'react'

export default function NavbarComponent() {
  return (
    <nav className='flex justify-center bg-black p-3 fixed w-full z-10 top-0'><Image src='/images/epopt.png' width={100} height={32}/></nav>
  )
}
