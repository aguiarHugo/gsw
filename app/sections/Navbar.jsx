'use client'

import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="w-full fixed z-10  ">
      {/* MOBILE */}
      <div className=" flex items-center justify-between w-full py-4 px-8 bg-gsw_gray backdrop-blur-md bg-opacity-50 border-b border-gsw_green sm:hidden ">
        <div>
          <Image src='/LOGO-MOBILE.svg' width={78} height={26} alt="GWM" />
        </div>
        <div className=" cursor-pointer">
          <Image src='/MENU-MOBILE.svg' width={24} height={14} alt="Menu" />
        </div>
      </div>

      {/* TABLET */}
      <div className="sm:flex md:hidden hidden items-center justify-between w-full py-4 px-8 bg-gsw_gray backdrop-blur-md bg-opacity-50 border-b border-gsw_green font-bold text-gsw_white">
        <a href="#types">MODELOS</a>
        <a href="#experience">GWM EXPERIENCE</a>
        <a href="#stores">CONCESSIONÁRIAS</a>
        <a href="#contact">CONTATO</a>
      </div>

      {/* DESKTOP */}
    </nav>
  )
}

export default Navbar
