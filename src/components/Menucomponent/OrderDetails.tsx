import React, { useState } from "react";
import Emptycartvector from "../../assets/Emptycartvector.png";
import cappucino from "../../assets/Cappucino 1.png";
function OrderDetails() {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };
  return (
    <div className=" relative flex flex-col gap-4  p-6 w-[27rem] shadow-xl h-[49rem]">
      <h1 className="font-bold text-xl">Order Details</h1>
      <div className="">
        <div className="flex gap-4">
          <button className=" flex flex-row gap-1 items-center justify-center  border px-6 py-1 rounded-3xl">
            <h1 className="text-md">Delivery</h1>
          </button>
          <button className=" flex flex-row gap-1 items-center justify-center  border px-6 py-1 rounded-3xl">
            <h1 className="text-md">Dine In</h1>
          </button>
          <button className=" flex flex-row gap-1 items-center justify-center  border px-6 py-1 rounded-3xl">
            <h1 className="text-md">Take away</h1>
          </button>
        </div>
        {/* card  */}
        <div className="flex gap-6 p-3 shadow-lg mt-4 rounded-lg ">
          <div className=" flex items-center justify-center w-24 h-28 bg-[#f7f3f0] rounded-xl">
            <img src={cappucino} alt="cappucino" className="w-24 h-24" />
          </div>
          <div>
            <div>
              <h1 className="text-xl font-semibold">cappucino</h1>
              <p className="text-gray-400 mt-1">Coffee, milk & palm sugar</p>
              <p className="text-[#C67C4E]">RWF 2,500</p>
            </div>
            <div className="flex items-center">
              <button
                className="px-2 h-4 flex items-center  py-2 border border-gray-300 rounded-full"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-2 h-4 flex items-center py-2 border  border-gray-300 rounded-[1000px]"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
            <div className="flex justify-between">
                <p  className="text-gray-400">Subtotal</p>
                <p>RWF 5,000</p>
            </div>
            <div className="flex justify-between">
                <p  className="text-gray-400">Discount</p>
                <p>0.00</p>
            </div>
            <div className="flex justify-between">
                <p  className="text-gray-400">Tax (0%)</p>
                <p>0.00</p>
            </div>
        </div>
      </div>
      <div className="absolute bottom-4 w-[90%]  ">
        <button className=" flex flex-row items-center w-full justify-center bg-[#f1ded3]  p-3 rounded-3xl">
          <h1 className="text-lg text-white">Place Order</h1>
        </button>
      </div>
    </div>
  );
}

export default OrderDetails;

<div className="flex flex-col items-center justify-center ">
  <img src={Emptycartvector} alt="Emptycartvector" className="w-52 h-48" />
  <h1 className="text-xl font-semibold">Your Cart is empty!</h1>
  <p>Go to the menu and find the items you like.</p>
</div>;
