import Image from "next/image"

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-[1024px] bg-cover bg-no-repeat bg-center"  
      style={{ backgroundImage: 'url(/hero-preto-branco.png)' }}
    >
        <div className="flex flex-col pt-[400px] sm:pt-[390px] lg:pt-[330px] justify-center items-center">
          <div className="hero-style" />
          <Image src='/HERO-LOGO.svg' width={240} height={239} alt="Logo" />
          <Image src='/LOGO-MOBILE.svg' width={240} height={80} alt="GWM" />
        </div>
        <a 
        href="#"
        className="flex justify-center mt-12 text-[24px] text-gsw_dark px-10 rounded-[56px] bg-gsw_green brightness-50 hover:brightness-100 transition-all duration-300 backdrop-blur-md w-[300px] mx-auto "
        >
          COMPRAR AGORA</a>
    </section>
  )
}

export default Hero