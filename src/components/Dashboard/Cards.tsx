import React from "react";

const Cards = ({ title, name, Icon, perc, style}) => {
  return (
    <div className="w-[378px] h-[155px] rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold">{title}</div>
        <div className=" flex items-center justify-center mr-4 w-8 h-8 rounded-md bg-[#faf9fd]">
        <Icon className={style}/>
        </div>
      </div>
      <div className="mb-2 text-gray-700 text-xl">
        <p>{name}</p>
      </div>
      <div className="text-gray-600 text-sm">
        <p>{perc}</p>
      </div>
    </div>
  );
};

export default Cards;
