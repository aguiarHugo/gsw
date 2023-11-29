'use client'

import Image from "next/image";
import React, { useState } from "react";

const carModels = [
  {
    model: "Cinza Diamante",
    circleColor: "#656667",
    imgUrl: "/cinza-diamante.png",
  },
  {
    model: "Azul Topázio",
    circleColor: "#255EC1",
    imgUrl: "/azul-topazio.png",
  },
  {
    model: "Branco Ágata",
    circleColor: "#D6D8D3",
    imgUrl: "/branco-agata.png",
  },
  {
    model: "Marrom Citrino",
    circleColor: "#3C150E",
    imgUrl: "/marrom-citrino.png",
  },
  {
    model: "Preto Hematita",
    circleColor: "#040404",
    imgUrl: "/preto-hematita.png",
  },
  {
    model: "Vermelho Granada",
    circleColor: "#4E0F17",
    imgUrl: "/vermelho-granada.png",
  },
];

const ColorPicker = () => {
  const [selectedModel, setSelectedModel] = useState(carModels[0].model);
  const [selectedImgUrl, setSelectedImgUrl] = useState(carModels[0].imgUrl);

  const handleColorClick = (model, imgUrl) => {
    setSelectedModel(model);
    setSelectedImgUrl(imgUrl);
  };

  return (
    <div className="mt-6">
      <div className="gap-[20px] w-[400px] h-[45px] sm:w-[580px] md:w-[1100px] md:h-[185px] md:rounded-full sm:h-[83px]  rounded-[51px] border border-solid border-[#DAF40F] flex justify-around items-center mx-auto px-6">
        {carModels.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`${item.model === selectedModel && 'border border-solid border-[#DAF40F]'} cursor-pointer h-[17px] w-[17px] sm:h-[33px] sm:w-[33px] md:h-[56px] md:w-[56px] rounded-full relative`}
            onClick={() => handleColorClick(item.model, item.imgUrl)}
            style={{ backgroundColor: item.circleColor }}
          ></div>
        ))}
        <p className="text-[10px] sm:text-[19px] md:text-[32px] md:min-w-[340px] sm:min-w-[180px] min-w-[110px] text-white uppercase">{selectedModel}</p>
      </div>
      {selectedImgUrl && (
        <Image
          src={selectedImgUrl}
          width={481}
          height={250}
          className="mt-[-50px] sm:mt-[-65px] md:mt-[-110px] md:ml-[450px] sm:ml-[85px] sm:w-[595px] sm:h-[308px] md:w-[1008px] md:h-[522px]"
        />
      )}
    </div>
  );
};

export default ColorPicker;
