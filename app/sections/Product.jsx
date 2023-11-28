
import ColorPicker from '../components/ColorPicker'

const Product = () => {
  return (
    <section id='product'>
        <div className="relative">
            <div className="relative z-1 px-[17px] sm:px-[32px] text-white">
                <div className="flex flex-col ml-[17px] text-white gap-[24px]"> 
                    <h2 className="text-[64px] font-extrabold  w-[292px] sm:w-[400px] md:w-[744px]">
                        HAVAL H6 HEV 2024
                    </h2>

                    <div>
                        <h3 className="w-[357px] sm:w-[563px] md:w-[783px] text-[40px] font-light pt-[24px]">
                            O AMANHÃ, HOJE! VERSÃO COMPLETA 
                        </h3>
                        <h3 className="w-[357px] sm:w-[563px] md:w-[783px] text-[40px] font-light">
                            COM PREÇO ÚNICO EM TODO O BRASIL.
                        </h3>
                    </div>
                
                    <p className="w-[358px] sm:w-[506px] md:w-[671px] text-[16px] font-light pt-[24px] ">
                        Quando tecnologia e eficiência andam juntas, o resultado é esse: um SUV urbano eletrificado, mais inteligente, completo e equipado, mais conectado com você e o futuro. Mais performance e desempenho sem abrir mão da economia para o seu bolso. Viva agora esta revolução.
                    </p>
                </div>
            </div>
        <div className="product-style" />           

        </div>
        <ColorPicker />
    </section>
  )
}

export default Product