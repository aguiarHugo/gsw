'use client'

import React, { useState } from "react";

const carModels = [
  {
    model: "Cinza Diamante",
    circleColor: "#656667",
    imgUrl: "../assets/cinza-diamante.png",
  },
  {
    model: "Azul Topázio",
    circleColor: "#255EC1",
    imgUrl: "../assets/azul-topazio.png",
  },
  {
    model: "Branco Ágata",
    circleColor: "#D6D8D3",
    imgUrl: "../assets/branco-agata.png",
  },
  {
    model: "Marrom Citrino",
    circleColor: "#3C150E",
    imgUrl: "../assets/marrom-citrino.png",
  },
  {
    model: "Preto Hematita",
    circleColor: "#040404",
    imgUrl: "../assets/preto-hematita.png",
  },
  {
    model: "Vermelho Granada",
    circleColor: "#4E0F17",
    imgUrl: "../assets/preto-vermelho-granda.png",
  },
];

const ColorPicker = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedImgUrl, setSelectedImgUrl] = useState(null);

  const handleColorClick = (model, imgUrl) => {
    setSelectedModel(model);
    setSelectedImgUrl(imgUrl);
  };


  return (
    <div className="mt-6 w-[400px] h-[45px] rounded-[51px] border-2 border-solid border-[#DAF40F] flex justify-around items-center mx-auto">
      <div className="flex items-center gap-[20px]">
        {carModels.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`${item.model === selectedModel && 'border-2 border-solid border-[#DAF40F]'} cursor-pointer h-[17px] w-[17px] rounded-full`}
            onClick={() => handleColorClick(item.model)}
            style={{ backgroundColor: item.circleColor }}
          ></div>
        ))}
      </div>
      <p className="text-[10px] min-w-[110px] text-white uppercase">{selectedModel}</p>
      <img
          src={selectedImgUrl}
          alt={`Imagem do modelo ${selectedModel}`}
          className="h-auto w-auto"
      />
    </div>
  );
};

export default ColorPicker;
