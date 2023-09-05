import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';
function Navbar() {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 mt-5'>
            <Link href="/" className='flex justify-center items-center ml-5'>
                <Image 
                // CAMBIAR EL SRC para CAMBIAR EL LOGO
                src= "/krend.svg"
                alt = "House Hub Logo"
                width={118}
                height={18}
                className='object-contain'/>
            </Link>
            <div className="flex items-right gap-5">
            <CustomButton
            title="Registrarse"
            btnType = "button"
            containerStyles='text-white rounded-full bg-violeta min-w-[130 px]'/>
            <CustomButton
            title="Iniciar sesión"
            btnType = "button"
            containerStyles='text-white rounded-full bg-violeta min-w-[130 px]'/>
            </div>
        </nav>
    </header>

  )
}

export default Navbar
