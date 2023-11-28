'use client'

import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="w-full fixed z-10">
      {/* MOBILE */}
      <div className="flex items-center justify-between w-full py-4 px-8 bg-gsw_gray backdrop-blur-md bg-opacity-50 border-b border-gsw_green sm:hidden ">
        <div>
          <Image src='/LOGO-MOBILE.svg' width={78} height={26} alt="GWM" />
        </div>
        <div className=" cursor-pointer">
          <Image src='/MENU-MOBILE.svg' width={24} height={14} alt="Menu" />
        </div>
      </div>

      {/* TABLET */}
      <div className="sm:flex lg:hidden hidden items-center justify-between w-full py-4 px-8 bg-gsw_gray backdrop-blur-md bg-opacity-50 border-b border-gsw_green font-semi-bold text-gsw_white">
        <a href="#types">MODELOS</a>
        <a href="#experience">GWM EXPERIENCE</a>
        <a href="#stores">CONCESSIONÁRIAS</a>
        <a href="#contact">CONTATO</a>
      </div>

      {/* DESKTOP */}
      <div className="w-full block mt-[28px]">
        <div className="hidden lg:flex lg:justify-center items-center w-[1360px] bg-gsw_gray py-2 border border-solid border-gsw_green backdrop-blur-md bg-opacity-50 rounded-[48px] mx-auto gap-10 font-semi-bold text-gsw_white">
          <a href="#types">MODELOS</a>
          <a href="#experience">GWM EXPERIENCE</a>
          <Image src='/LOGO-MOBILE.svg' width={78} height={26} alt="GWM" />
          <a href="#stores">CONCESSIONÁRIAS</a>
          <a href="#contact">CONTATO</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
