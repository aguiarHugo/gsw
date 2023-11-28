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
      <div className="gap-[20px] w-[400px] h-[45px] rounded-[51px] border border-solid border-[#DAF40F] flex justify-around items-center mx-auto px-6">
        {carModels.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`${item.model === selectedModel && 'border border-solid border-[#DAF40F]'} cursor-pointer h-[17px] w-[17px] rounded-full relative`}
            onClick={() => handleColorClick(item.model, item.imgUrl)}
            style={{ backgroundColor: item.circleColor }}
          ></div>
        ))}
        <p className="text-[10px] min-w-[110px] text-white uppercase">{selectedModel}</p>
      </div>
      {selectedImgUrl && (
        <Image
          src={selectedImgUrl}
          width={481}
          height={250}
          className="mt-[-50px]"
        />
      )}
    </div>
  );
};

export default ColorPicker;
