import React, { useState } from "react";
import cappucino from "../../assets/Cappucino 1.png";

function MenuComponent() {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };
  return (
    <div className="rounded-lg shadow-lg p-4 h-[250px] w-[400px]">
      <div className="flex gap-6 ">
        <div className=" flex items-center justify-center w-28 h-32 bg-[#f7f3f0] rounded-xl">
          <img src={cappucino} alt="cappucino" className="w-24 h-24" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">cappucino</h1>
          <p className="text-gray-400 mt-1">Coffee, milk & palm sugar</p>
          <p className="text-[#C67C4E]">RWF 2,500</p>
          <div className="flex mt-2 gap-4">
            <p> Size:</p>
            <div className="flex gap-2">
              <button className=" flex flex-row gap-1 items-center justify-center   xbg-[#C67C4E] border px-4 py-1 rounded-3xl">
                <h1 className="text-sm">Small</h1>
              </button>
              <button className=" flex flex-row gap-1 items-center justify-center   xbg-[#C67C4E] border px-4 py-1 rounded-3xl">
                <h1 className="text-sm">Large</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <button
            className="px-2 py-1 border border-gray-300 rounded"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="px-2 py-1 border  border-gray-300 rounded"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <button className="px-12 py-2 border border-[#C67C4E]   text-[#C67C4E] rounded-3xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuComponent;
