import React from "react";
import cappucino from "../../assets/Cappucino 1.png";
const orderList =[
    {
        image:cappucino,
        name: "Cappucino",
        Descriptions:"200 tea ordered<"
    },
    {
        image:cappucino,
        name: "Cappucino",
        Descriptions:"200 tea ordered<"
    },
    {
        image:cappucino,
        name: "Cappucino",
        Descriptions:"200 tea ordered<"
    }
]
function MostOrder() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Most Ordered</h1>
      {orderList.map((item, index) => (<div key={index} className="flex items-center gap-4 border-b-2 xpb-1 mt-7">
        <img src={item.image} alt="" />
        <div>
          <h1>{item.name}</h1>
          <h5 className="text-[#a5b1c2]">{item.Descriptions}</h5>
        </div>
      </div>))}
      <button className=" flex flex-row items-center w-full justify-center border-2 border-[#C67C4E] p-2 rounded-3xl mt-4">
            <h1 className="text-lg text-[#C67C4E]">View All</h1>
          </button>
    </div>
  );
}

export default MostOrder;
